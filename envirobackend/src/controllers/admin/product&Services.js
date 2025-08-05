const productModel = require("../../model/product");
const servicesModel = require("../../model/services");

// service functions
exports.addServices = async (req, res) => {
  try {
    if (req.file) {
      images = req.file ? req.file.filename : null;
      console.log("Image uploaded:", images);
    }
    const serviceData = new servicesModel(req.body);
    serviceData.serviceImage = images;
    await serviceData.save();
    res
      .status(201)
      .json({ message: "Service added successfully", service: serviceData });
  } catch (error) {
    res.status(500).json({ message: "Failed to add service", error });
  }
};

exports.updateServices = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.file) {
      images = req.file ? req.file.filename : null;
      console.log("Image uploaded:", images);
    }
    const serviceData = await servicesModel.findByIdAndUpdate(
      id,
      req.body,
      {
        serviceImage: images,
      },
      {
        new: true,
      }
    );
    if (!serviceData) {
      return res.status(404).json({ message: "Service not found" });
    }
    res
      .status(200)
      .json({ message: "Service updated successfully", service: serviceData });
  } catch (error) {
    res.status(500).json({ message: "Failed to update service", error });
  }
};

exports.deleteServices = async (req, res) => {
  try {
    const { id } = req.params;
    const serviceData = await servicesModel.findByIdAndDelete(id);
    if (!serviceData) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service", error });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await servicesModel.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve services", error });
  }
};

// product functions
exports.addProduct = async (req, res) => {
  try {
    let images = "";
    if (req.file) {
      images = req.file ? req.file.filename : null;
      console.log("Images uploaded:", images);
    }

    const productData = new productModel(req.body);
    productData.images = images;
    await productData.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: productData });
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let images = "";
    if (req.file) {
      images = req.file ? req.file.filename : null;
      console.log("Images uploaded:", images);
    }

    const productData = await productModel.findByIdAndUpdate(
      id,
      { ...req.body, images },
      { new: true }
    );
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product updated successfully", product: productData });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = await productModel.findByIdAndDelete(id);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products", error });
  }
};

exports.getProductByServices = async (req, res) => {
  try {
    const { filter } = req.params;
    const products = await productModel.find(
      filter ? { services: filter } : {}
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products", error });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = await productModel.findById(id);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve product", error });
  }
};
