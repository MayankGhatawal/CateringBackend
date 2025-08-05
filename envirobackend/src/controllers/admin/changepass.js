let admin = require("../../model/Admin");
let bcrypt = require("bcryptjs");

exports.change_pass = async (req, res) => {
  try {
    let token = req.cookies.adjwt;
    let password = req.body.pass;
    let newpass = req.body.newpass;
    console.log("newPass", newpass);
    let hashedPassword = await bcrypt.hash(newpass, 10);

    let data = await admin.findOne({ auth_key: token });
    let check = bcrypt.compareSync(password, data.pass);
    if (!check) {
      return res.status(404).json({
        message: "Password doesn't match",
        success: false,
      });
    }
    let passwordUpdate = await admin.findOneAndUpdate(
      { auth_key: token },
      { $set: { pass: hashedPassword } }
    );
    if (passwordUpdate) {
      return res.status(200).json({
        data: passwordUpdate,
        success: true,
        message: "Password Update successfully",
      });
    } else {
      return res.status(400).json({
        data: [],
        success: false,
        message: "Password Update failed",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

