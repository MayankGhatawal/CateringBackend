let {
  change_pass,
  otpVerify,
  otp_Send,
} = require("../../controllers/admin/forgetPass");
let express = require("express");
let router = express.Router();

router.post("/adminSend_otp", otp_Send);
router.post("/adminVerify", otpVerify);
router.post("/adminChangePass", change_pass);

module.exports = router;
