const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// All Routes...
// 1. Route to Get All Products : GET
router.route("/products").get(getAllProducts);
// 2. Route to Create a New Product : POST
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
// 3. Route to Update a Product (Update a Product / Delete a single Product)
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
// 4. Get Product Details
router.route("/product/:id").get(getProductDetails);

// Exporting the Router Function
module.exports = router;
