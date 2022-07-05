const User = require('./user');
const Movie = require('./Movie');
const Review = require('./Review');

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Movie.hasMany(Review, {
    foreignKey: 'movie_id'
});

Review.belongsTo(Movie, {
    foreignKey: 'movie_id'
});

module.exports = { User, Review, Movie };