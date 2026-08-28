const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Food",
                required: true
            },

            name: {
                type: String,
                required: true
            },

            price: {
                type: Number,
                required: true
            },

            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    status: {
    type: String,
    enum: [
        "Placed",
        "Confirmed",
        "Preparing",
        "Out for Delivery",
        "Delivered",
        "Cancelled"
    ],
    default: "Placed"
}

}, {
    timestamps: true
});


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;