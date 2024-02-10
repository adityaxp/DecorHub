const { model } = require("mongoose");
const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("Product listing created successfully");
    } catch (error) {
      res.status(500).json("Failed to create product listing");
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("Failed to get the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("Failed to get the product");
    }
  },

  searchProduct: async (req, res) => {
    try {
    } catch (error) {}
  },
};
