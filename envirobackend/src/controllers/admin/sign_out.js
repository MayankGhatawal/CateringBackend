let admin = require("../../model/Admin");

exports.Sign_Out = async (req, res) => {
  try {
    let token = req.cookies.adjwt;
    // Clear the JWT cookie
    res.clearCookie("adjwt", { httpOnly: true });

    let data = await admin.findOneAndUpdate(
      { auth_key: token },
      { auth_key: null }
    );
    return res.status(200).json({
      message: "Logout successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred during logout.",
      success: false,
      status: 500,
    });
  }
};
