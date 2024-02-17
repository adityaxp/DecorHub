const router = require('express').Router();
const productController = require('../controllers/productController');

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProduct);

router.get("/search/:key", productController.searchProducts);

router.post("/", productController.createProduct);

module.exports = router
