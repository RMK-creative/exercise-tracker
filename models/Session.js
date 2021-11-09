const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  hr: {
    type: Number,
  },
  calories: {
    type: Number,
  },
  duration: {
    type: Number,
  },
});
module.exports = mongoose.model("Session", SessionSchema);
