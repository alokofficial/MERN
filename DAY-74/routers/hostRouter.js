const express = require("express");
const homesController = require("../controllers/hostController");

const hostRouter = express.Router();


hostRouter.get("/add-home",homesController.getAddHome);
hostRouter.post("/add-home",homesController.postAddHome);


exports.hostRouter = hostRouter;

