const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyTokenAndAuthorization, verifyToken } = require("../middleware/verifyToken");


// UPADATE USER
router.put("/:id", verifyTokenAndAuthorization, userController.updateUser);

// DELETE USER

router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);

// GET USER

router.get("/", verifyToken, userController.getUser);


module.exports = router