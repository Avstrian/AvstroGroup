const jwt = require('jsonwebtoken');

const JWT_SECRET = '0m8hct2htn29mc2hr8hc8hmcrhnuhrehfncshfoufnh8w9hc32c9';

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

module.exports = {
    verifyToken,
    JWT_SECRET,
};