const router = require("express").Router();

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

module.exports = router;
