
const express = require("express");
const homesController = require("../controllers/homes");

const storeRouter = express.Router();


storeRouter.get("/", homesController.getHomes);

module.exports = storeRouter;
