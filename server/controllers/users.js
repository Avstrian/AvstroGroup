const router = require('express').Router();
const { register, login, getProfile, logout, addMoney } = require('../services/users');
const mapErrors = require('../utils/mappers');
const { checkEmptyInputs } = require('../utils/inputs');
const { createToken } = require('../utils/jwt');
const authCookieName = require('../app-config');
const auth = require('../middlewares/auth');


router.post('/register', async (req, res) => {
    try {
        if (checkEmptyInputs(req.body.firstName.trim(), req.body.lastName.trim(), req.body.email.trim().toLowerCase(), req.body.password)) {
            throw new Error('All fields are required!');
        }

        if (req.body.password != req.body.repass) {
            throw new Error('Passwords must match!')
        }

        const result = await register(
            req.body.firstName.trim(),
            req.body.lastName.trim(),
            req.body.email.trim().toLowerCase(),
            req.body.password.trim(),
        );

        const token = createToken({ id: result._id });

        res.cookie(authCookieName, token, { httpOnly: true });
        res.status(201).json(result);

    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error })
    }
});

router.post('/login', async (req, res) => {
    try {
        const result = await login(req.body.email.trim().toLowerCase(), req.body.password);

        const token = createToken({ id: result._id });

        res.cookie(authCookieName, token, { httpOnly: true });
        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/logout', async (req, res) => {
    try {
        const token = req.cookies[authCookieName];

        await logout(token);

        res
            .clearCookie(authCookieName)
            .status(204)
            .send({ message: 'Logged out!' });
            
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/profile', auth(), async (req, res) => {
    try {
        const user = req.user;

        if (!user) {
            res.status(204).json({});
        } else {
            const result = await getProfile(user._id);

            res.status(200).json(result);
        }

    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/add-money', auth(), async( req, res) => {
    try {
        const { money, userId } = req.body;
        
        const result = await addMoney(money, userId);
        res.status(200).json(result.money);

    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
})

module.exports = router;

