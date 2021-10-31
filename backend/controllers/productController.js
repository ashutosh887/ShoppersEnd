const Product = require("../models/productModel");

// ErrorHandler
const ErrorHandler = require("../utils/errorHandler");

// Async Function Error Handler
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create Product - ADMIN
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// Get product details - Single Product
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // If Product is not found
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // If product is found
  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product - ADMIN
exports.updateProduct = catchAsyncErrors(async (req, res) => {
  let product = Product.findById(req.params.id);

  // If product is not found
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
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
});

// Delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // Product not found
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Remove Product from the Database
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully...",
  });
});
