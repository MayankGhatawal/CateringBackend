const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin = require("../../model/Admin");
exports.adminLogin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.pass;
    let data = await admin.findOne({ email });
    

    if (!data) {
      return res.status(404).json({
        message: "Email not found",
        success: false,
      });
    }

    let check = bcrypt.compareSync(password, data.pass);
    if (!check) {
      return res.status(404).json({
        message: "Password doesn't match",
        success: false,
      });
    }

    if (data.user_auth === "Blocked") {
      return res.status(404).json({
        message: "User is blocked. Please contact support.",
        success: false,
      });
    }

    console.log("admin Logged in");
    console.log("ID is", data._id);

    const token = jwt.sign({ _id: data._id.toString() }, "wedsad", {
      expiresIn: "1d",
    });

    await admin.findByIdAndUpdate(data._id, { auth_key: token });

    res.cookie("adjwt", token, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      message: "Login successful",
      email: data.email,
      data: data,
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login Page Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
