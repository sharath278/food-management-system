const Food = require("../models/food");

const getAllFoods = async (req, res) => {
    try {
        const allFoods = await Food.find();
        res.status(200).json(allFoods);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};


const getFood = async (req, res) => {
    try {
        const id = req.params.id;
        const food = await Food.findById(id);
        res.status(200).json(food);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }

}

const createFood = async (req, res) => {
    try {
        const newfood = new Food({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            category: req.body.category,
            isVeg: req.body.isVeg,
            isAvailable: req.body.isAvailable,
            preparationTime: req.body.preparationTime,
            rating: req.body.rating,
        })
        const data = await newfood.save();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }

}



const updateFood = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedFood = await Food.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
                category: req.body.category,
                isVeg: req.body.isVeg,
                isAvailable: req.body.isAvailable,
                preparationTime: req.body.preparationTime,
                rating: req.body.rating
            },
            {
                new: true
            }
        );

        if (!updatedFood) {
            return res.status(404).json({ message: "Food not found" });
        }

        res.status(200).json(updatedFood);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Food.findByIdAndDelete(id);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
    
}


module.exports = { getAllFoods, getFood, createFood, updateFood, deleteFood };