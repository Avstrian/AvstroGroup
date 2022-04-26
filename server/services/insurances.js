const Insurance = require('../models/Insurance');
const User = require('../models/User');

async function createInsurance(insurance) {
    const result = new Insurance(insurance);
    await result.save();

    return result;
}

async function addInsuranceToUser(insuranceId, userId) {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error('User does not exist!')
    }

    user.insurances.push(insuranceId);
    user.createdInsurances += 1;
    await user.save();
}

async function getInsuranceById(id) {
    const insurance = await Insurance.findById(id);

    if (!insurance) {
        throw new Error('Insurance does not exist!');
    }

    return insurance;
}

async function payForInsurance(insuranceId, userId) {
    const insurance = await Insurance.findById(insuranceId);
    const user = await User.findById(userId);

    if (!insurance || !user) {
        throw new Error('Insurance/User does not exist!');
    }

    if (insurance.cost > user.money) {
        throw new Error('Not enough money');
    }

    if (insurance.timesLeftToPay === 0) {
        throw new Error('Insurance is alreay paid!');
    }

    insurance.timesLeftToPay -= 1;
    user.money -= insurance.cost;

    await insurance.save();
    await user.save();

    return insurance;
}

async function deleteInsurance(id) {
    const result = await Insurance.findByIdAndDelete(id);

    return result;
}

module.exports = {
    createInsurance,
    addInsuranceToUser,
    getInsuranceById,
    payForInsurance,
    deleteInsurance
}