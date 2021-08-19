const { Schema, model } = require("mongoose");

//Song Schema
const songSchema = new Schema(
  {
    title: String,
    artist: Number,
    time: String,
  },
  { timestamps: true }
);

//Song Model
const Song = model("song", songSchema);

//EXPORT MODEL
module.exports = Song;
