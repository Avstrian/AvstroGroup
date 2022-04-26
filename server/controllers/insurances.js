const router = require('express').Router();
const mapErrors = require('../utils/mappers');
const auth = require('../middlewares/auth');
const { createInsurance, getInsuranceById, deleteInsurance, removeInsuranceFromUser, payForInsurance } = require('../services/insurances');
const { addInsuranceToUser } = require('../services/insurances');

router.post('/create', auth(), async (req, res) => {
    const insurance = {
        vehicleType: req.body.vehicleType,
        volume: req.body.volume,
        power: req.body.power,
        regNumber: req.body.regNumber,
        ownerAge: req.body.ownerAge,
        ownerExperience: req.body.ownerExperience,
        cost: req.body.cost,
        paymentType: req.body.paymentType,
        timesLeftToPay: req.body.timesLeftToPay,
        owner: req.user._id
    }

    try {
        const result = await createInsurance(insurance);
        await addInsuranceToUser(result._id, req.user._id);
        res.status(201).json({});

    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:id', auth(), async (req, res) => {
    const id = req.params.id;
    
    try {
        const result = await getInsuranceById(id);

        res.status(200).json(result);

    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.put('/:id', auth(), async (req, res) => {
    const insuranceId = req.params.id;
    const userId = req.user.id;

    try {
        const result = await payForInsurance(insuranceId, userId)

        res.status(200).json({});
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
})


router.delete('/delete/:id', auth(), async (req, res) => {
    const insuranceId = req.params.id;
    const userId = req.body.userId;

    try {
        const result = await deleteInsurance(insuranceId);

        await removeInsuranceFromUser(insuranceId, userId);

        res.status(204).json({});
        
    } catch (err) {
        console.error(err);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
})

module.exports = router;