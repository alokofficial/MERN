const express = require("express");
const storeController = require("../controllers/storeController");

const storeRouter = express.Router();


storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.get("/favourites", storeController.getFavourites);
storeRouter.post("/favourites", storeController.postFavourites);
storeRouter.post("/favourites/delete/:homeId", storeController.deleteFavourites);

module.exports = storeRouter;