const Cart = require("../models/cart");

const addToCart = async (req, res) => {
    try {

        const { food } = req.body;

        const user = req.user.id;

        let cart = await Cart.findOne({
            user: user
        });

        if (!cart) {

            cart = new Cart({
                user: user,
                items: [
                    {
                        food: food,
                        quantity: 1
                    }
                ]
            });

            await cart.save();

            return res.status(201).json({
                message: "Food added to cart",
                cart: cart
            });
        }

        const existingItem = cart.items.find(
            (item) => item.food.toString() === food
        );

        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            cart.items.push({
                food: food,
                quantity: 1
            });

        }

        await cart.save();

        res.status(200).json({
            message: "Food added to cart",
            cart: cart
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getCart = async (req, res) => {
    try {

        const user = req.user.id;

        const cart = await Cart.findOne({
            user: user
        }).populate("items.food");

        res.status(200).json({
            cart: cart
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};



const updateCart = async (req, res) => {
    try {

        const { foodId } = req.params;
        const { quantity } = req.body;

        const user = req.user.id;

        const cart = await Cart.findOne({
            user: user
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const item = cart.items.find(
            (item) => item.food.toString() === foodId
        );

        if (!item) {
            return res.status(404).json({
                message: "Food not found in cart"
            });
        }

        if (quantity < 1) {
            return res.status(400).json({
                message: "Quantity must be at least 1"
            });
        }

        item.quantity = quantity;

        await cart.save();

        res.status(200).json({
            message: "Cart updated successfully",
            cart: cart
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};


const removeFromCart = async (req, res) => {
    try {

        const { foodId } = req.params;

        const user = req.user.id;

        const cart = await Cart.findOne({
            user: user
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        cart.items = cart.items.filter(
            (item) => item.food.toString() !== foodId
        );

        await cart.save();

        res.status(200).json({
            message: "Food removed from cart",
            cart: cart
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

module.exports = {
    addToCart,
    getCart,
    updateCart,
    removeFromCart,
};