const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

// All Routes...
// 1. Route to Get All Products : GET
router.route("/products").get(getAllProducts);
// 2. Route to Create a New Product : POST
router.route("/products/new").post(createProduct);
// 3. Route to Update a Product
router.route("/product/:id").put(updateProduct);

// Exporting the Router Function
module.exports = router;
