const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const User = require('../models/User');
const { createToken, JWT_SECRET} = require('../utils/jwt');

const blacklist = [];

async function register(firstName, lastName, email, password) {
    const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (existing) {
        throw new Error('Email already exists');
    }

    const user = new User({
        firstName,
        lastName,
        email,
        hashedPassword: await bcrypt.hash(password, 10),
    });

    await user.save();

    return createSession(user);
}

async function login(email, password) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user) {
        throw new Error('Incorrect email or password!');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect email or password!');
    }

    return createSession(user);
}

async function logout(token) {
    await Token.create({ token });
}

async function getProfile(id) {
    const user = await User.findById(id).populate('insurances');

    return createSession(user);
}

async function addMoney(money, id) {
    const existing = await User.findById(id);


    if (!existing) {
        throw new Error('User does not exist!');
    }

    existing.money += money;
    await existing.save();

    return existing;
}

function createSession(user) {
    return {
        email: user.email,
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        money: user.money,
        insurances: user.insurances,
        createdInsurances: user.createdInsurances,
        vip: user.vip,
        _v: user._v,
        accessToken: createToken({
            email: user.email,
            _id: user._id
        })
    };
}

module.exports = {
    register,
    login,
    logout,
    getProfile,
    addMoney,
}