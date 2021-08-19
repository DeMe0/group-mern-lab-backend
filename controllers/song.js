const Song = require("../models/song");
const { Router } = require("express");
const router = Router();

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
