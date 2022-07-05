const { Movie, Review, User } = require("../models");
const { QueryTypes } = require('sequelize');

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

router.get("/populate", async (req, res) => {
    try {
        const movieData = await Movie.findAll()
        res.status(200).json(movieData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        // const data = await sequelize.query(`SELECT review, date_created, title, image, description, email FROM review JOIN movie ON review.movie_id = movie.id JOIN user ON review.user_id = user.id WHERE movie_id = ${req.params.id};`, { type: QueryTypes.SELECT });
        // console.log(data)
        const movieData = await Movie.findByPk(req.params.id,
            {
                include: [{
                    model: Review
                }]
            }
        );
        if (!movieData) {
            res.status(404).json({ message: 'Movie not found.'});
            return;
        } else {
            const movie1 = movieData.get({plain: true});
            res.render('moviepage', {
                movie1
            })
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
