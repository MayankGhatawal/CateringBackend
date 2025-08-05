let express = require("express");
const {
  addContactUs,
  deleteContactUs,
  getContactUs,
  updateContactUsStatus,
} = require("../../controllers/admin/contectUs");
let router = express.Router();
let auth = require("../../../auth/adminauth");

router.get("/getContectUs", auth, getContactUs);
router.post("/addContactUs", addContactUs);
router.patch("/contectUs/:id", auth, updateContactUsStatus);
router.delete("/deleteContectUs/:id", auth, deleteContactUs);

module.exports = router;
 