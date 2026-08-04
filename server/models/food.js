const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },

    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Pizza",
        "Burger",
        "Biryani",
        "Chinese",
        "Drinks",
        "Dessert",
        "South Indian",
        "North Indian",
      ],
    },

    isVeg: {
      type: Boolean,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    preparationTime: {
      type: Number,
      required: true,
      min: 1,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;