const express = require('express');
const router = express.Router();
const {getAllFoods,getFood,createFood,updateFood,deleteFood} = require("../controllers/food");
const authenticate = require("../middleware/authMiddleware");
const AuthorizeRole = require("../middleware/roleMiddleware");

router.get("/api/foods",getAllFoods);
router.get("/api/food/:id",getFood);
router.post("/api/food",authenticate,AuthorizeRole("admin"),createFood);
router.put("/api/food/:id",authenticate,AuthorizeRole("admin"),updateFood);
router.delete("/api/food/:id",authenticate,AuthorizeRole("admin"),deleteFood);



module.exports = router;