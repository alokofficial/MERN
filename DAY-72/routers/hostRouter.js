const path = require("path");
const express = require("express");
const rootDir = require("../util/path-util");

const hostRouter = express.Router();
const homes = [];
hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { title: "Add Home" });
});

hostRouter.post("/add-home", (req, res, next) => {
  homes.push({houseName: req.body.houseName});
  res.redirect("/");
});

exports.hostRouter = hostRouter;
exports.homes=homes
