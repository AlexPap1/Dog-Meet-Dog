const { Comment } = require('../models');

const commentdata = [
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
