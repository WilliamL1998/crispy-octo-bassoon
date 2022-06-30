const { User } = require('../models')

const userData = [
    {
        "email": "tyler@email.com",
        "password": "password1234"
    },
    {
        "email": "will@email.com",
        "password": "password1234"
    },
    {
        "email": "evelyn@email.com",
        "password": "password1234"
    },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;