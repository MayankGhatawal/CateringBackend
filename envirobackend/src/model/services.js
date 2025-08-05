const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  serviceName: {
    type: String,
  },
  serviceDescription: {
    type: String,
  },
  serviceImage: { type: String },
  keyFeatures: {
    type: [String],
  },
});
const servicesModel = mongoose.model("services", servicesSchema);
module.exports = servicesModel;
