import React, { useState } from "react";

const ClientPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageLink, setImageLink] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleUploadClick = () => {
    setShowForm(!showForm);
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleLinkChange = (e) => {
    setImageLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let imageURL = "";
    let originalLink = "";

    if (imageFile) {
      imageURL = URL.createObjectURL(imageFile); // for preview
      originalLink = "Uploaded from file";
    } else if (imageLink) {
      imageURL = imageLink;
      originalLink = imageLink;
    }

    if (imageURL) {
      setUploadedImages((prev) => [
        ...prev,
        { imageURL, originalLink },
      ]);
    }

    // Reset form
    setImageFile(null);
    setImageLink("");
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Dashboard Client Page</h1>
      <p>This is the client page inside the admin dashboard.</p>

      {/* Upload Button */}
      <button
        onClick={handleUploadClick}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>

      {/* Upload Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 p-4 border rounded bg-gray-50 space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Or Paste Image Link:</label>
            <input
              type="text"
              value={imageLink}
              onChange={handleLinkChange}
              placeholder="https://example.com/image.jpg"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      )}

      {/* Uploaded Image Cards */}
      {uploadedImages.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uploadedImages.map((item, index) => (
            <div
              key={index}
              className="border rounded overflow-hidden shadow bg-white"
            >
              <img
                src={item.imageURL}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-sm text-gray-700 text-center">
                <p className="font-medium mb-1">Image {index + 1}</p>
                <p className="break-words text-blue-600 text-xs">
                  {item.originalLink}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientPage;
