// controllers/songsController.js
const express = require("express");
const songs = express.Router();

// queries
const {
  getAllSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
} = require("../queries/song");

// validations
const {
  checkName,
  checkArtist,
  checkYear,
  checkBoolean,
} = require("../validations/checkSongs");

// GET ROUTE to get all songs
// localhost:3350/songs/
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    console.log(allSongs.message);
    res.status(500).json({ error: "server error" });
  }
});

// GET one song
// localhost:3350/songs/:id
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSong(id);
  if (oneSong) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

// Post a new song
// localhost:3350/songs/
songs.post(
  "/",
  checkName,
  checkArtist,
  checkYear,
  checkBoolean,
  async (req, res) => {
    try {
      const song = await addSong(req.body);
      res.json(song);
    } catch (error) {
      res.status(400).json({ error: "Song was not added." });
    }
  }
);

// Delete a song
// localhost:3350/songs/:id
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

//PUT (update) a song
// localhost:3350/songs/:id
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedSong = await updateSong(id, body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

module.exports = songs;
