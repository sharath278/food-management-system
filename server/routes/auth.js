const express = require('express');
const router = express.Router();

const {registeruser,loginuser} = require("../controllers/auth");

router.post("/signup",registeruser);
router.post('/login',loginuser);



module.exports = router;