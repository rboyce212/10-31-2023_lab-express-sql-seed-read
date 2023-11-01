// Import express and initialize an instance of the express server
const express = require("express");
const app = express();

// Songs ROUTES
const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

//Import cors
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Tuner Full Stack Application!");
});

module.exports = app;
