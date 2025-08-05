const reviewModel = require("../../model/reviews");

// Add Review
exports.addReview = async (req, res) => {
  try {
    console.log("Adding a new review with files", req.body);
    console.log("Files received:", req.files);
    
    let images = [];
    if (req.files && Array.isArray(req.files)) {
      images = req.files.map((file) => file.filename);
      console.log("Images uploaded:", images);
    }

    const reviewData = {
      ...req.body,
      eventImage: images,
    };

    const review = new reviewModel(reviewData);
    await review.save();
    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    res.status(500).json({ message: "Failed to add review", error });
  }
};

// ...rest of your code (updateReview, deleteReview, getAllReviews, getActiveReviews)
// Update Review Toggle Only
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { toggle } = req.body;
    const updated = await reviewModel.findByIdAndUpdate(
      id,
      { toggle },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review toggle updated", review: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update review toggle", error });
  }
};

// Delete Review
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await reviewModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
};

// Get All Reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to get reviews", error });
  }
};

// Get Reviews Where Toggle is True
exports.getActiveReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find({ toggle: true });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to get active reviews", error });
  }
};
