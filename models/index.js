// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Pet = require('./Pet');
const Image = require('./Image');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
  
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

User.hasMany(Pet, {
      foreignKey: 'user_id'
});

Pet.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Pet.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(Pet, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment, Pet, Image };
