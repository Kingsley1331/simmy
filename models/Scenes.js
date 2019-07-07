const mongoose = require("mongoose");

const { Schema } = mongoose;

const scenesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  backgroundColour: String,
  context: Object,
  cursorOnshape: Boolean,
  mousePos: Object,
  selected: String,
  settings: Object,
  shapes: Array,
  throwArray: Array,
  time: Number,
  timeStep: Number
});

module.exports = mongoose.model("Scenes", scenesSchema);

// const productSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   name: String,
//   price: Number
// });

// module.exports = mongoose.model("Product", productSchema);
