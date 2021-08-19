// import the connection
const mongoose = require("./connection");
// import the model
const Song = require("../models/song");
// create a connection to the db
const db = mongoose.connection;
// import the seed data
const manySongs = require("./seedData.json");

// create a a manual Song
const emptySong = {
  title: "",
  artist: "",
  time: "",
};
// use the emptySong model to create the Song Document
Song.create(emptySong, (error, song) => {
  error ? console.log(error) : console.log("song", song);
  db.close();
});

// create many songs...at once
Song.insertMany(manySongs, (error, songs) => {
  error ? console.log(error) : console.log("songs:", songs);
  db.close();
});

// convert from callback to .then()
try {
  Song.deleteMany({}).then(() => {
    Tweet.insertMany(manySongs).then((songs) => {
      console.log("songs:", songs);
      db.close();
    });
  });
} catch (err) {
  console.log(err);
}
