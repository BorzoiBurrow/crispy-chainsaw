require('dotenv').config();
const mongoose = require('mongoose');
const ConString = process.env.URL;

mongoose.connect(ConString, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = mongoose;