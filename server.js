// required imports 
require('dotenv').config()
const mongoose = require("./config/connection"); 
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const routes = require("./routes")
app.use('/', routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log(`listening on ${PORT}!`)
  })
  

