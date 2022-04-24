const jwt = require('jsonwebtoken');
const JWT_SECRET = '0m8hct2htn29mc2hr8hc8hmcrhnuhrehfncshfoufnh8w9hc32c9';

function createToken(data) {
    return jwt.sign(data, JWT_SECRET, { expiresIn: '1d' });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken,
    JWT_SECRET,
};