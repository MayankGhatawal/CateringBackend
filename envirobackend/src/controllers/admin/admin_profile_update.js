let admin = require("../../model/Admin");

exports.Update_admin = async (req, res) => {
  let name = req.body.name;
  let mobile = req.body.mobile;
  let dateOfBirth = req.body.dateOfBirth;
  let address = req.body.address;
  let state = req.body.state;
  let gender = req.body.gender;
  let city = req.body.city;
  let country = req.body.country;
  let token = req.cookies.adjwt;

  // Handle file upload (only update if a new file is uploaded)
  let new_image = req.file ? req.file.filename : null;

  // Fetch the current (admin) to check existing image
  let existing_user = await admin.findOne({ auth_key: token });

  if (!existing_user) {
    return res.status(404).json({
      data: [],
      success: false,
      status: 404,
      message: "Admin not found",
    });
  }

  // Keep the existing image if no new one is uploaded
  let admin_image = new_image ? new_image : existing_user.admin_image;

  let update_data = await admin.findOneAndUpdate(
    { auth_key: token },
    {
      name: name,
      mobile: mobile,
      dateOfBirth: dateOfBirth,
      address: address,
      state: state,
      gender: gender,
      city: city,
      country: country,
      admin_image: admin_image,
    },
    { new: true } // return the updated document
  );

  console.log("Admin", update_data);

  if (update_data) {
    return res.status(200).json({
      data: update_data,
      success: true,
      message: "Admin details updated",
    });
  } else {
    return res.status(400).json({
      data: [],
      success: false,
      message: "Admin can't update",
    });
  }
};

