// Core Modules
const path = require("path");

const express = require("express");

const rootDir = require("../util/path-util");

const storeRouter = express.Router();

const {homes} = require("./hostRouter");

storeRouter.get("/", (req, res, next) => {
  res.render('index',{homes:homes, title: 'Home'});
});

module.exports = storeRouter;
