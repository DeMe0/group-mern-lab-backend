///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();
const { MONGODB_URI } = process.env;

/////////////////////////////////////
// MONGOOSE CONNECTION
/////////////////////////////////////
const mongoose = require("mongoose");
const config = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
};

const db = mongoose.connection;

// connect
mongoose.connect(MONGODB_URI, config);

// Messages
db.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;
