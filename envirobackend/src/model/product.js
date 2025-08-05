const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  service: {
    type: String,
  },
  description: { type: String },
  images: String,
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
