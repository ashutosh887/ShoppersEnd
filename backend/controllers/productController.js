const Product = require("../models/productModel");

// ErrorHandler
const ErrorHandler = require("../utils/errorHandler");

// Async Function Error Handler
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// API Features
const ApiFeatures = require("../utils/apiFeatures");

// Create Product - ADMIN
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productCount,
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

// Reviews Section
// Create New Review or Update a Review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});
