const router = require('express').Router();
const { Movie, Review } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const movieData = await Movie.findByPk(req.params.id,
            {
                include: [{
                    model: Review
                }]
            }
        );
        if (!movieData) {
            res.status(404).json({ message: 'Movie not found.'});
            return;
        } else {
            res.status(200).json(movieData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;