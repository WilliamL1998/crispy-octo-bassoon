const router = require('express').Router();
const Review = require("../../models/Review");

router.post('/newreview', async (req, res) => {
    try {
        const newReviewData = await Review.create({
        movie_id: req.body.movie_id,
        review: req.body.review,
        // using input user_id
        user_id: req.session.user_id,
        });
        res.status(200).json(newReviewData);
        // res.render('moviepage')
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });

module.exports = router