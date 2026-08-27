const express = require('express');
const router = express.Router();
const {placeOrder,getMyOrders} = require("../controllers/orders");
const authenticate = require("../middleware/authMiddleware");


router.post("/order",authenticate,placeOrder);
router.get( "/orders",authenticate,getMyOrders);

module.exports = router;