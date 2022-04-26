const { model, Schema, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    hashedPassword: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        default: 0,
        min: [0, 'Money cannot be negative'],
    },
    insurances: {
        type: [ObjectId],
        default: [],
        ref: 'Insurance'
    },
    review: {
        type: ObjectId,
        ref: 'Review',
    },
    createdInsurances: {
        type: Number,
        default: 0,
    },
    vip: {
        type: Boolean,
        default: false,
    },
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;