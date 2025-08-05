let admin = require("../../model/Admin");
let bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
// vanbaghAdmin forget password
exports.otp_Send = async (req, res) => {
  try {
    let email = req.body.email;
    console.log("email--", email);

    let findUser = await admin.findOne({ email: email });
    //   console.log("finduser--",findUser);

    function generateOTP() {
      const digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }

    const otp = generateOTP();
    let adminData = await admin.findOneAndUpdate(
      { email: findUser.email },
      { otp: otp }
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "developerinfo1212@gmail.com",
        pass: "cocb txob mfpk zrar",
      },
    });

    const mailOptions = {
      from: "developerinfo1212@gmail.com",
      to: findUser.email,
      subject: "Your OTP for Gmail Verification",
      text: `Your OTP is: ${otp}`,
    };

    const data1 = await transporter.sendMail(mailOptions);
    if (data1) {
      return res.status(200).json({
        data: adminData,
        message: "Otp send successfully",
        success: true,
        status: 200,
      });
    } else {
      return res.status(300).json({
        data: [],
        message: "Not send failed",
        success: false,
        status: 300,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.otpVerify = async (req, res) => {
  try {
    let adminData = req.body.email;
    let otp = req.body.otp;
    console.log("otp--", otp);

    console.log("admin email for otp verify----" + adminData);
    let data = await admin.findOne({
      email: adminData,
    });
    console.log("data email--", data.email);

    if (data.otp == otp) {
      return res.status(200).json({
        data: data,
        message: "Otp verification failed",
        success: true,
        status: 200,
      });
    } else {
      return res.status(300).json({
        data: [],
        message: "Otp verification failed",
        success: false,
        status: 300,
      });
    }
  } catch (error) {}
};

exports.change_pass = async (req, res) => {
  try {
    let email = req.body.email;
    let newpass = req.body.newpass;
    console.log("newPass", newpass);
    console.log("email for change pass---", email);
    let hashedPassword = await bcrypt.hash(newpass, 10);

    let userDetails = await admin.findOne({ email: email });
    let user_email = userDetails.email;
    let passwordUpdate = await admin.findOneAndUpdate(
      { email: user_email },
      { $set: { pass: hashedPassword } }
    );
    if (passwordUpdate) {
      return res.status(200).json({
        data: passwordUpdate,
        success: true,
        status: 200,
        message: "Password Update successfully",
      });
    } else {
      return res.status(300).json({
        data: [],
        success: false,
        status: 300,
        message: "Password Update failed",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
