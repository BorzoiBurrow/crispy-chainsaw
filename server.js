// required imports 
require('dotenv').config()
const mongoose = require("./config/connection"); 
const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}!`)
  })
  

