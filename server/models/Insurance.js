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
    ownerFirstName: {
        type: String,
        minlength: [2, 'Names must be at least 2 characters long!'],
        required: [true, 'Owner names are required!']
    },
    ownerLastName: {
        type: String,
        minlength: [2, 'Names must be at least 2 characters long!'],
        required: [true, 'Owner names are required!']
    },
    ownerAge: {
        type: Number,
        min: [18, 'Age cannot be lower than 18'],
        required: [true, 'Age is required!']
    },
    experience: {
        type: Number,
        min: [1, 'You must have at least 1 year of driving experience!'],
        required: [true, 'Years of experience are required!']
    },
    payment: {
        type: String,
        required: [true, 'You need to specify your type of payment!']
    }
});

const Insurance = model('Insurance', insuranceSchema);

module.exports = Insurance;