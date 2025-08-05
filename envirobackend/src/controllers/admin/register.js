let admin = require("../../model/Admin");
let bcrypt = require("bcryptjs");

exports.adminRegister = async (req, res) => {
  try {
    let {
      name,
      email,
      pass: password,
      mobile,
      dateOfBirth,
      gender,
      address,
      state,
      country,
      city,
    } = req.body;

    // Check if password is provided and not empty
    if (!password || password.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    // Check if an admin already exists
    let existingAdmin = await admin.findOne({ role: "Admin" });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists. You cannot register another admin.",
      });
    }

    let rec = new admin({
      name,
      mobile,
      email,
      pass: hashedPassword,
      dateOfBirth,
      gender,
      address,
      state,
      country,
      city,
      role: "Admin",
    });

    let saved_data = await rec.save();

    if (saved_data) {
      return res.status(200).json({
        message: "Admin registered successfully",
        data: saved_data,
        success: true,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Admin registration failed",
      });
    }
  } catch (error) {
    console.error("Error in register API:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
