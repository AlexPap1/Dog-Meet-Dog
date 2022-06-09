const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
