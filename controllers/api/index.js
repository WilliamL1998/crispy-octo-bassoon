const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newreview= require('./newreview');
const movieRoutes = require('./movieRoutes');

router.use('/reviews', newreview);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes)

module.exports = router;