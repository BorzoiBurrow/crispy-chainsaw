require('dotenv').config();
const mongoose = require('mongoose');

const ConString = process.env.URL;
mongoose.connect(ConString);

const db = mongoose.connection;
const models = require('../models');


db.on('error', (err) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', async () => {
  console.log('Connected to the database');

  try {
    await mongoose.model('Thought').createCollection();
    await mongoose.model('User').createCollection();
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose;