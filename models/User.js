const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = mongoose.Schema({
  googleId: String
});

// const userSchema = new Schema({
//   googleId: String
// });

mongoose.model("users", userSchema); // create a new collection called users if it doesn't already exist
