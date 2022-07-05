const { User } = require('../models')

const userData = [
    {
        "email": "test@email.com",
        "password": "$2b$10$omQCWvImd8O9Lv.rnmxYwusP/gATuuDTDPiX8aLKybRbzj4YufTgy"
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;