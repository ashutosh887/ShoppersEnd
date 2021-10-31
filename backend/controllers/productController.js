const Product = require("../models/productModel");

// Create Product - ADMIN
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

// Get product details - Single Product
exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);

  // If Product is not found
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  // If product is found
  res.status(200).json({
    success: true,
    product,
  });
};

// Update Product - ADMIN
exports.updateProduct = async (req, res) => {
  let product = Product.findById(req.params.id);

  // If product is not found
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found...",
    });
  }

  // If product is found
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// Delete Product
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // Product not found
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  // Remove Product from the Database
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully...",
  });
};
