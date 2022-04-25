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
    await user.save();
}

async function getInsurancesForUser(userId) {

}

async function getInsuranceById(id) {
    const insurance = await Insurance.findById(id);

    if (!insurance) {
        throw new Error('Insurance does not exist!');
    }

    return insurance;
}

async function deleteInsurance(id) {
    const result = await Insurance.findByIdAndDelete(id);

    return result;
}

module.exports = {
    createInsurance,
    addInsuranceToUser,
    getInsurancesForUser,
    getInsuranceById,
    deleteInsurance
}