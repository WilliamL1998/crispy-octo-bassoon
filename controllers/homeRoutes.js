const router = require("express").Router();
require('dotenv').config();

router.get("/", (req, res) => {
    res.render("home")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/movie", (req, res) => {
    res.render("moviepage")
})

router.get("/key", (req, res) => {
    res.json(process.env.API_KEY)
})

module.exports = router;
