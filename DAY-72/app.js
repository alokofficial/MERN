// Core Modules
const path = require("path"); // to join path

// External Module
const express = require("express"); // to create server
const app = express(); // creating server
const bodyParser = require("body-parser");

// Local Module
const rootDir = require('./util/path-util'); // to join path

const {hostRouter} = require("./routers/hostRouter"); // routers
const storeRouter = require("./routers/storeRouter"); // routers

app.set("view engine", "ejs"); // to use ejs
app.set("views", "views"); // to use ejs
app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: true })); // to get data from form

app.use(storeRouter); // routers
app.use("/host", hostRouter); // routers

app.use((req, res, next) => {
  res.statusCode = 404;
  res.render("404", { title: "Page Not Found" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
