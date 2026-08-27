const express = require('express');
const router = express.Router();
const {addToCart,getCart,updateCart,removeFromCart} = require('../controllers/cart');
const authenticate = require('../middleware/authMiddleware');


router.post("/cart",authenticate,addToCart);
router.get("/cart",authenticate,getCart);
router.put("/cart/:foodId",authenticate,updateCart);
router.delete("/cart/:foodId",authenticate,removeFromCart)


module.exports = router;