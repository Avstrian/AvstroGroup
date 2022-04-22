const router = require('express').Router();
const { register, login, getProfile } = require('../services/users');
const mapErrors = require('../utils/mappers');
const { checkEmptyInputs } = require('../utils/inputs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/jwt');

const authCookieName = 'auth-cookie';

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

        res.cookie('auth-cookie', jwt.sign({ id: result._id }, JWT_SECRET, { expiresIn: '1d' }))
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
        res.cookie(
            authCookieName,
            jwt.sign({ id: result._id }, JWT_SECRET, { expiresIn: '1d' }),
            { httpOnly: true, sameSite: 'none', secure: true }
        )
        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/profile', async (req, res) => {
    try {
        const token = req.cookies[authCookieName];

        
        // if (token === '') {
        //     res.status(204).json({});
        // } else {
        //     const result = await getProfile(id);
        //     res.status(200).json(result);
        // }


    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
})

module.exports = router;

