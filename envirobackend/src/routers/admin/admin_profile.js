let express = require("express");
const { Admin_profile } = require("../../controllers/admin/admin_profile");
let router = express.Router();
let auth = require("../../../auth/adminauth");

router.get("/adminProfile", Admin_profile);

module.exports = router;
