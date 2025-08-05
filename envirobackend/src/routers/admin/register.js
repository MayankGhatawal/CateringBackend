let {
adminRegister
} = require("../../controllers/admin/register");
let express = require("express");
let router = express.Router();

router.post("/adminRegister", adminRegister);
module.exports = router;
