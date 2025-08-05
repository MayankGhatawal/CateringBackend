let admin = require("../../model/Admin");

exports.Admin_profile = async (req, res) => {
  let token = req.cookies.adjwt;

  let data = await admin.findOne({ auth_key: token });
  if (data) {
    return res.status(200).json({
      data: data,
      message: "Admin Profile View",
      success: true,
    });
  } else {
    return res.status(400).json({
      data: [],
      message: "Can't view admin profile",
      success: false,
    });
  }
};
