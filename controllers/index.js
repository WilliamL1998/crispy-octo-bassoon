const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.get("/", async (req, res) => {
    res.render("layouts/main")
})

module.exports = router;
