const { verifyToken } = require('../utils/jwt');
const { authCookieName } = require('../app-config');
const User = require('../models/User');
const Token = require('../models/Token');

function auth() {
    return function (req, res, next) {
        const token = req.cookies['auth-cookie'] || '';

        if (token === '') {
            next();
            return;
        }

        Promise.all([
            verifyToken(token),
            Token.findOne({ token })
        ])
            .then(([data, blacklistedToken]) => {
                if (blacklistedToken) {
                    return Promise.reject(new Error('blacklisted token'));
                }
                User.findById(data.id)
                    .then(user => {
                        req.user = user;
                        req.isLogged = true;
                        next();
                    })
            })
            .catch(err => {
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    console.error(err);
                    res
                        .status(401)
                        .send({ message: "Invalid token!" });
                    return;
                }
                next(err);
            });
    }
}

module.exports = auth;