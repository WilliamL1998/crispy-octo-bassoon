const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    var newUser = new User({
        email: req.body.email,
        password: req.body.password
    })
    
    await User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(async userData => {
        if (userData) {
            res.json({ message: "User already exists."})
        } else {
            await newUser.save()
            .then (() => {
                res.status(200).json(newUser)
            })
            .catch (err => {
                console.error(err);
            })
        }
    })
    .catch (err => {
        console.error(err);
    })
})

module.exports = router;