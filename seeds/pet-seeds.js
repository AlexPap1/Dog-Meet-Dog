const { Pet } = require('../models');

const petdata = [
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;