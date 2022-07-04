const { Review } = require('../models')

const reviewData = [
    {
        "review": "It's alright.",
        "user_id": 1,
        "movie_id": 1
    }
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;