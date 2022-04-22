const { model, Schema } = require('mongoose');

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
        min: [0, 'Money cannot be negative'],
        required: [true, 'Money is required']
    },
    createdInsurances: {
        type: Number,
        min: [0, 'Created insurances cannot be negative'],
        required: [true, 'Created insurances are required']
    },
    vip: {
        type: Boolean,
        required: [true, 'VIP must be specified']
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