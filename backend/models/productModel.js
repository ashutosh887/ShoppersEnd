const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Product name..."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Product Description..."],
  },
  price: {
    type: Number,
    required: [true, "Please enter Product Price..."],
    maxlength: [6, "Price can't exceed 8 Characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Product Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter Product Stock"],
    maxlength: [4, "Stock can't exceed more than 4 characters..."],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exporting the Product Schema
module.exports = mongoose.model("Product", productSchema);
