const router = require("express").Router();
const cartController = require("../controllers/cartController");
const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../middleware/verifyToken");

router.get("/find", cartController.getCart);

router.post("/", cartController.addCart);

router.delete("/:cartItem", cartController.deleteCartItem);

router.delete("/:id", cartController.resetCart);

module.exports = router;
