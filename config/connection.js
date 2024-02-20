require('dotenv').config()
const mongoose = require('mongoose');
const ConString = process.env.URL; 

mongoose.connect(ConString)

const db = mongoose.connection;

module.exports = mongoose;