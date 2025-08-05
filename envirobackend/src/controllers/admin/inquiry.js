const inquiryModel = require("../../model/inquiry");

// Add Inquiry
exports.addInquiry = async (req, res) => {
  try {
    console.log("req.body-----",req.body)
    const inquiry = new inquiryModel(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry added successfully", inquiry });
  } catch (error) {
    res.status(500).json({ message: "Failed to add inquiry", error });
  }
};

// Get All Inquiries
exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await inquiryModel.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to get inquiries", error });
  }
};

// Update Inquiry
exports.updateInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await inquiryModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Inquiry not found" });
    res.status(200).json({ message: "Inquiry updated", inquiry: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update inquiry", error });
  }
};

// Delete Inquiry
exports.deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await inquiryModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Inquiry not found" });
    res.status(200).json({ message: "Inquiry deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete inquiry", error });
  }
};