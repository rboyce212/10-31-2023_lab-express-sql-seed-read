// Import express and initialize an instance of the express server
const express = require("express");
const app = express();

// Songs ROUTES
const songsController = require("./controllers/songsController.js");

// // 404 PAGE
// app.get("*", (req, res) => {
//   res.status(404).send("Page not found.");
// });

//Import cors
const cors = require("cors");

// Middleware
app.use(cors());
// Middleware that allows the server to accept json
app.use(express.json());
// Middleware...When the URL starts with /songs, use the songsController to route us appropriately
app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

module.exports = app;
