const { model, Schema, Types: { ObjectId } } = require('mongoose');

const reviewSchema = new Schema({
    owner: {
        type: ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number,
        min: [1, 'Rating can not be lower than 1'],
        max: [10, 'Rating can not be higher than 10'],
        required: [true, 'Rating is required!']
    },
    text: {
        type: String,
        required: [true, 'Review text is required'],
        minlength: [10, 'Review text must be at least 10 characters!'],
        maxlength: [90, 'Review text must be below 90 characters! ']
    }
});

const Review = model('Review', reviewSchema);

module.exports = Review;