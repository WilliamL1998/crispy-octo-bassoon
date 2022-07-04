const sequelize = require('../config/connection');
const seedUsers = require('./user-seed');
const seedMovies = require('./movie_seed');
const seedReviews = require('./review_seed');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('***************** awaiting seedUsers ***************')
    await seedUsers();
    console.log('***************** awaiting seedMovies ***************')
    await seedMovies();
    console.log('***************** awaiting seedReviews ***************')
    await seedReviews();
    // Add in seeding for movies
    // add in seeding for reviews
    process.exit(0);
};

seedAll();