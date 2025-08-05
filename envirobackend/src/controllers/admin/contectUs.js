const contactUsModel = require("../../model/contactus");
const nodemailer = require("nodemailer");
const adminModel = require("../../model/Admin");

// Reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or your mail service
  auth: {
        user: "developerinfo1212@gmail.com",
        pass: "cocb txob mfpk zrar", // App password
  },
});

// Add Contact Us
exports.addContactUs = async (req, res) => {
  try {
    const contact = new contactUsModel(req.body);

    await contact.save();

    const adminFind = await adminModel.findOne({ role: "Admin" });
    const adminEmail = adminFind.email;
    // Send email to admin
    await transporter.sendMail({
      from: "developerinfo1212@gmail.com",
      to: adminEmail, // change to admin email
      subject: "New Contact Inquiry",
      html: `
        <h3>New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Email:</strong> ${contact.number}</p>
        <p><strong>Message:</strong> ${contact.message}</p>
      `,
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from:"developerinfo1212@gmail.com",
      to: contact.email,
      subject: "We received your inquiry",
      html: `
        <p>Hi ${contact.name},</p>
        <p>Thank you for contacting us. We will get back to you shortly.</p>
      `,
    });

    res.status(201).json({ message: "Contact inquiry added", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add contact inquiry", error });
  }
};

// Update Contact Us Status
exports.updateContactUsStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await contactUsModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ message: "Contact inquiry not found" });

    res.status(200).json({ message: "Status updated", contact: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update status", error });
  }
};

// Get All Contact Us
exports.getContactUs = async (req, res) => {
  try {
    const contacts = await contactUsModel.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to get contact inquiries", error });
  }
};

// Delete Contact Us
exports.deleteContactUs = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await contactUsModel.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Contact inquiry not found" });
    res.status(200).json({ message: "Contact inquiry deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete contact inquiry", error });
  }
};
