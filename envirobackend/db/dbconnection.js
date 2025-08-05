const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);

dotenv.config();
exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database not connected", error);
  }
};
