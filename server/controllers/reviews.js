const router = require('express').Router();
const mapErrors = require('../utils/mappers');
const auth = require('../middlewares/auth');
const { createReview, addReviewToUser, getReviews } = require('../services/reviews');

router.post('/create', auth(), async (req, res) => {
    const review = {
        owner: req.user.id,
        rating: req.body.rating,
        text: req.body.text
    }

    try {
        const result = await createReview(review);
        await addReviewToUser(result._id, req.user.id);

        res.status(201).json({});
    } catch (err) {
        console.error(err);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/get', async (req, res) => {
    const data = await getReviews();

    res.status(200).json(data);
})

module.exports = router;