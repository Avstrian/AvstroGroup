const { model, Schema } = require('mongoose');

const tokenSchema = new Schema({
    token: String,
}, { timestamps: { createdAt: 'created_at' } });

const Token = model('Token', tokenSchema);

module.exports = Token;