// controllers/songsController.js
const express = require("express");
const { getAllSongs } = require("../queries/song.js");
const songs = express.Router();

// Get all songs
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

module.exports = songs;
