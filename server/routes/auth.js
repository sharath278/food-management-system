const express = require('express');
const router = express.Router();

const {registeruser,loginuser, getCurrentUser} = require("../controllers/auth");
const authenticate = require("../middleware/authMiddleware");


router.post("/signup",registeruser);
router.post('/login',loginuser);
router.get('/me',authenticate,getCurrentUser)



module.exports = router;