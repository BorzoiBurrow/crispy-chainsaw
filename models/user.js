const mongoose = require("../config/connection")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String, 
  });




  console.log(userSchema)