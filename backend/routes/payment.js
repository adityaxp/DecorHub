const router = require('express').Router();
const paymentController = require('../controllers/paymentsController');

router.post("/", paymentController.createPayment);
// router.post("/fulfillment", paymentController.stripeHook);



module.exports = router
