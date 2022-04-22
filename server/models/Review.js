const { model, Schema, Types: { ObjectId } } = require('mongoose');

const reviewSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Review text is required'],
        minlength: [10, 'Review text must be at least 10 characters long!']
    },
    ownerId: {
        type: ObjectId,
        ref: 'User'
    }
});

const Review = model('Review', reviewSchema);

module.exports = Review;