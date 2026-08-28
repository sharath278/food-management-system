const Cart = require("../models/cart");
const Order = require("../models/order");

const placeOrder = async (req, res) => {
    try {

        const user = req.user.id;

        const cart = await Cart.findOne({
            user: user
        }).populate("items.food");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        const orderItems = cart.items.map((item) => ({
            food: item.food._id,
            name: item.food.name,
            price: item.food.price,
            quantity: item.quantity
        }));

        let totalAmount = 0;

        for (const item of orderItems) {

            totalAmount += item.price * item.quantity;

        }

        const order = new Order({
            user: user,
            items: orderItems,
            totalAmount: totalAmount
        });

        await order.save();

        cart.items = [];

        await cart.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: order
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getMyOrders = async (req, res) => {
    try {

        const user = req.user.id;

        const orders = await Order.find({
            user: user
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            orders: orders
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};


const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .populate("user", "name email")
            .sort({
                createdAt: -1
            });

        res.status(200).json({
            orders: orders
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};


const updateOrderStatus = async (req, res) => {
    try {

        const { orderId } = req.params;
        const { status } = req.body;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        order.status = status;

        await order.save();

        res.status(200).json({
            message: "Order status updated successfully",
            order: order
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};


module.exports = {placeOrder,getMyOrders,getAllOrders,updateOrderStatus};