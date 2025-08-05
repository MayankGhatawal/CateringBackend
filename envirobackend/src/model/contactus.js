const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  email: { type: String },
  message: { type: String },
  status: { type: String ,
    default: "New" ,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const contactUsModel = mongoose.model("contactUs", contactUsSchema);
module.exports = contactUsModel;
