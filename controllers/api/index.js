const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newreview= require('./newreview');

router.use('/users', userRoutes);
router.use('/reviews', newreview);

module.exports = router;
