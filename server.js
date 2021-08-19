///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config()
const {PORT=6280} = process.env

//MONGO CONNECTION
const mongoose = require('./db/connection')
const morgan = require('morgan')
const cors = require('cors')
const { response } = require("express")

//Bringing in Express
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello world"))

app.listen(PORT, () => console.log(`port is running on ${PORT}`))