const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  eventTitle: { type: String },
  eventLocation: { type: String },
  rating: {
    type: Number,
  },
  description: { type: String },
  eventImage: [String],
  toggle: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const reviewModel = mongoose.model("review", reviewSchema);
module.exports = reviewModel;
