let express = require("express");
let router = express.Router();
const {
Sign_Out
} = require("../../controllers/admin/sign_out");

router.put("/adminSignOut", Sign_Out);

module.exports = router;
