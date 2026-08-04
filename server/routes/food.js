const express = require('express');
const router = express.Router();
const {getAllFoods,getFood,createFood,updateFood,deleteFood} = require("../controllers/food");


router.get("/api/foods",getAllFoods);
router.get("/api/food/:id",getFood);
router.post("/api/food",createFood);
router.put("/api/food/:id",updateFood);
router.delete("/api/food/:id",deleteFood);



module.exports = router;