const { Movie } = require("../models");

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

router.get("/populate", async (req, res) => {
    try {
        const movieData = await Movie.findAll()
        res.status(200).json(movieData)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
