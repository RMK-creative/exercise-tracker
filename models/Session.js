const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
    // required: true,
  },
  hr: {
    type: Number,
    // required: true,
  },
  calories: {
    type: Number,
    // required: true,
  },
});
module.exports = mongoose.model("Session", SessionSchema);
