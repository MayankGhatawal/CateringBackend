const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  otp: { type: Number },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  country: { type: String },
  admin_image: {
    type: String,
    default: null,
  },

  auth_key: { type: String, default: null },
  role: {
    type: String,
    default: "Admin", // Default role for new admin,
  },
});

const AdminModel = mongoose.model("Admin", adminSchema);
module.exports = AdminModel;
