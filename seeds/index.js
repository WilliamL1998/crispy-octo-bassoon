const sequelize = require('../config/connection');
const seedUsers = require('./user-seed');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('***************** awaiting seedUsers ***************')
    await seedUsers();
    // Add in seeding for movies
    // add in seeding for reviews
    process.exit(0);
};

seedAll();