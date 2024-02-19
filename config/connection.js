const mongoose = require('mongoose');
const ConString = Process.env.CONURL; 


mongoose.connect(ConString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = mongoose;