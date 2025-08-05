let express = require("express");
const {
  addProduct,
  addServices,
  deleteProduct,
  deleteServices,
  getAllProducts,
  getAllServices,
  updateProduct,
  updateServices,
  getProductById,
  getProductByServices,
} = require("../../controllers/admin/product&services");
let router = express.Router();
let auth = require("../../../auth/adminauth");
const multer = require("multer");

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

router.post("/addProduct", auth, upload.single("productImage"), addProduct);
router.post("/addServices", auth, upload.single("serviceImages"), addServices);
router.delete("/deleteProduct/:id", auth, deleteProduct);
router.delete("/deleteServices/:id", auth, deleteServices);
router.patch("/updateProduct/:id", auth, updateProduct);
router.patch("/updateServices/:id", auth, updateServices);
//get----------
router.get("/getAllServices", getAllServices);
router.get("/getAllProducts", getAllProducts);
router.get("/getProductByServices/:filter", getProductByServices);
router.get("/getProductById/:id", getProductById);

module.exports = router;
