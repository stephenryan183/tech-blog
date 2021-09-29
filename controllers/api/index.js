const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const videogameRoutes = require('./videogame-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/videogames', videogameRoutes);

module.exports = router;