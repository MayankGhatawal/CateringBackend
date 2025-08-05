const jwt = require("jsonwebtoken");
const admin = require("../src/model/Admin");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.adjwt;
    if (token) {
      console.log("JWT Token received:", token);

      const { _id } = jwt.verify(token, "wedsad");
      console.log("Decoded user ID:", _id);

      const adminData = await admin.findOne({ _id });
      if (adminData) {
        console.log("admin found:", adminData);
        req.user = adminData;
        return next();
      } else {
        console.error("admin not found in database");
        return res.status(401).json({ error: "Unauthorized: admin not found" });
      }
    } else {
      console.error("ADJWT Cookie missing");
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
