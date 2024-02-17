const Orders = require("../models/Orders");

module.exports = {
  getOrders: async (req, res) => {
    const userId = req.params.id;

    try {
      const allOrder = await Orders.find();

      res.status(200).json(allOrder);
    } catch (error) {
      res.status(500).json({ message: "Failed to get user orders" });
    }
  },

  getUserOrders: async (req, res) => {
    const userId = req.params.id;

    try {
      const userOrders = await Orders.find({ userId })
        .populate({
          path: "productId",
          select: "-description -product_location",
        })
        .exec();

      res.status(200).json(userOrders);
    } catch (error) {
      res.status(500).json({ message: "Failed to get user orders" });
    }
  },
};
