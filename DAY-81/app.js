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
const session = require("express-session");
const mongoose = require('mongoose');
const mongo_session = require("connect-mongodb-session");


const MongoDBStore = mongo_session(session);

const MONGO_URI = "mongodb://localhost:27017/airbnb";
const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "sessions"
});

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "my secret",
  resave: false,
  saveUninitialized: true,
  store: store,
}))



app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if(!req.session.isLoggedIn){
    return res.redirect("/");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);

const PORT = 3001;
mongoose.connect(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});