const express = require("express");
const hostController = require("../controllers/hostController");

const hostRouter = express.Router();


hostRouter.get("/edit-home",hostController.getAddHome);
hostRouter.post("/edit-home",hostController.postAddHome);
hostRouter.get("/host-homes",hostController.getHostHome)
hostRouter.get("/edit-home/:homeId",hostController.getEditHome)
hostRouter.post("/edit-home/:homeId",hostController.postEditHome)
hostRouter.post("/delete-home/:homeId",hostController.postDeleteHome)
// hostRouter.post("/host-home",hostController.postHostHome)


exports.hostRouter = hostRouter;

