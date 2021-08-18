require("dotenv").config()
const express = require('express')
const mongoose = require('./db/connection')
const morgan = require('morgan')
const cors = require('cors')
const { response } = require("express")
const app = express()
const {PORT=6280} = process.env

app.get("/", (req, res) => res.send("hello world"))

app.listen(PORT, () => console.log(`port is running on ${PORT}`))