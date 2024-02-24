require('dotenv').config();
const mongoose = require('mongoose');

const ConString = process.env.URL;
mongoose.connect(ConString);

const db = mongoose.connection;
const models = require('../models');


db.on('error', (err) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to the database');
});


module.exports = mongoose;