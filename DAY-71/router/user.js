const express = require("express");
const router = express.Router();

router.use('/', (req, res) => {
    console.log(req.method, req.url)
    res.send(`
        <h1>Welcome to User Page</h1>
        <a href="/host/add-home">Register your home on AirBnB</a>
    `);
});

module.exports = {
    router
}
