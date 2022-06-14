const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const petRoutes = require('./pet-routes.js');
const imageRoutes = require('./image-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);
router.use('/image', imageRoutes);

module.exports = router;
