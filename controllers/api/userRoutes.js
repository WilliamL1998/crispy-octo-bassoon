const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password."});
      return;
    }

    const validPassword = userData.checkPassword(req.body.password)

    if (!validPassword) {
      console.log("YO")
      res.status(400).json({ message: "Incorrect email or password."})
      return;
    }
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;