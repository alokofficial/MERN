// Core Modules
const path = require("path"); // to join path

// External Module
const express = require("express"); // to create server
const app = express(); // creating server
const bodyParser = require("body-parser");

// Local Module
const rootDir = require('./util/path-util'); // to join path

const hostRouter = require("./routers/hostRouter"); // routers
const storeRouter = require("./routers/storeRouter"); // routers


app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true })); // to get data from form

app.use(storeRouter); // routers
app.use("/host", hostRouter); // routers

app.use((req, res, next) => {
  res.statusCode = 404;
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
