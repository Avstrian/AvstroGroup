const Review = require('../models/Review');
const User = require('../models/User');

async function getReviews() {
    return Review.find({}).populate('owner', 'firstName lastName');
}

async function createReview(review) {
    const result = new Review(review);
    await result.save();

    return result;
}

async function addReviewToUser(reviewId, userId) {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error('User does not exist!')
    }

    user.review = reviewId;
    user.vip = true;
    await user.save();
}

module.exports = {
    getReviews,
    createReview,
    addReviewToUser
}