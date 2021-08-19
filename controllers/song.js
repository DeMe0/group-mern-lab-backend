const Song = require("../models/song");
const { Router } = require("express");
const router = Router();

const songSeed = [
    {
       title:"Paint It Black",
       artist:"The Rolling Stones",
       time:"3:46"
    },
    {
        title:"One Bourbon, One Scotch, One Beer",
        artist:"George Thorogood & The Destroyers",
        time:"8:29"
     },
     {
        title:"Your Love",
        artist:"The Outfield",
        time:"4:13"
     }
 ]

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
    // try block for catching errors
    try {
      // remove all songs from database
      await Song.remove({});
      // add the seed data to the database
      await Song.create(songSeed);
      // get full list of songs to confirm seeding worked
      const songs = await Song.find({});
      // return full list of songs as JSON
      res.json(songs);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
//index route
router.get("/", async (req, res) => {
  res.json(await Song.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Song.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Song.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Song.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
