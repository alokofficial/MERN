// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const authRouter = require("./routers/authRouter");
const rootDir = require("./util/path-util");
const errorController = require('./controllers/errorController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // console.log(res.get("Cookie").split("=")[1] === "true")
  req.isLoggedIn = req.get("Cookie")?.split("=")[1] === "true";
  next();
})
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if(!req.isLoggedIn){
    return res.redirect("/");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/airbnb";

const PORT = 3001;
mongoose.connect(url).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});