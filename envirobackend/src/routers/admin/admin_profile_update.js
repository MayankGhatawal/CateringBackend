let express = require("express");
let router = express.Router();
let auth = require("../../../auth/adminauth");
const multer = require("multer");
const {
  Update_admin,
} = require("../../controllers/admin/admin_profile_update");

let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

router.put("/update_profile", upload.single("admin_image"), Update_admin);
module.exports = router;
