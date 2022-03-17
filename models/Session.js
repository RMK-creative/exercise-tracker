const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
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
  notes: {
    type: String,
  },
});
module.exports = mongoose.model("Session", SessionSchema);
