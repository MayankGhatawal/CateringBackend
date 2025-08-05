let {
  addInquiry,
  deleteInquiry,
  getInquiries,
  updateInquiry,
} = require("../../controllers/admin/inquiry");
let express = require("express");
let router = express.Router();
const auth = require("../../../auth/adminauth");

router.post("/submitInquiry", addInquiry);
router.get("/getInquiry", auth, getInquiries);
router.patch("/updateInquiryStatus/:id", auth, updateInquiry);
router.delete("/deleteInquiry/:id", auth, deleteInquiry);

module.exports = router;
