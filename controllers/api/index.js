const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const petRoutes = require('./pet-routes.js');
const imageUpload = require('./imageUpload.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);

// for Cloudinary POST route
router.use('/dashboard', imageUpload);

module.exports = router;
