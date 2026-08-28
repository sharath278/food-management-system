const express = require('express');
const router = express.Router();
const {placeOrder,getMyOrders,getAllOrders,updateOrderStatus} = require("../controllers/orders");
const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.post("/order",authenticate,placeOrder);
router.get( "/orders",authenticate,getMyOrders);
router.get("/admin/orders",authenticate,authorizeRole("admin"),getAllOrders);
router.put("/admin/orders/:orderId",authenticate,authorizeRole("admin"),updateOrderStatus);

module.exports = router;