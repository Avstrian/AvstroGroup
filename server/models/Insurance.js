const { model, Schema, Types: { ObjectId } } = require('mongoose');

const insuranceSchema = new Schema({
    vehicleType: {
        type: String,
        minlength: [3, 'Your vehicle type must be at least 3 characters long!'],
        required: [true, 'Vehicle type is required']
    },
    volume: {
        type: Number,
        min: [1000, 'Engine volume must be at least 1000 mililitres (1 litre)!'],
        required: [true, 'Engine volume is required']
    },
    power: {
        type: Number,
        min: [50, 'Horsepower must be at least 50!'],
        required: [true, 'Horsepower is required']
    },
    regNumber: {
        type: String,
        required: [true, 'Registration number is required!']
    },
    ownerAge: {
        type: Number,
        min: [18, 'Age cannot be lower than 18'],
        required: [true, 'Age is required!']
    },
    ownerExperience: {
        type: Number,
        min: [1, 'You must have at least 1 year of driving experience!'],
        required: [true, 'Years of experience are required!']
    },
    cost: {
        type: Number,
        min: [100, 'Cost cannot possibly be under 100'],
        required: [true, 'Cost is required!'],
    },
    paymentType: {
        type: String,
        required: [true, 'You need to specify your type of payment!']
    },
    timesLeftToPay: {
        type: Number,
        required: [true, 'Times left to pay must be specified!'],
        min: [0, 'Times to pay cannot be negative!']
    },
    owner: {
        type: ObjectId,
        ref: 'User'
    }
});

const Insurance = model('Insurance', insuranceSchema);

module.exports = Insurance;