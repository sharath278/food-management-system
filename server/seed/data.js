const foods = [
  {
    name: "Margherita Pizza",
    description: "Classic cheese pizza with fresh mozzarella and basil.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=70",
    category: "Pizza",
    isVeg: true,
    isAvailable: true,
    preparationTime: 20,
    rating: 4.5,
  },

  {
    name: "Farmhouse Pizza",
    description: "Loaded with fresh vegetables and mozzarella cheese.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=70",
    category: "Pizza",
    isVeg: true,
    isAvailable: true,
    preparationTime: 25,
    rating: 4.7,
  },

  {
    name: "Pepperoni Pizza",
    description: "Pepperoni slices with extra cheese.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=70",
    category: "Pizza",
    isVeg: false,
    isAvailable: true,
    preparationTime: 25,
    rating: 4.8,
  },

  {
    name: "Veg Burger",
    description: "Crispy vegetable patty with fresh lettuce and cheese.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=70",
    category: "Burger",
    isVeg: true,
    isAvailable: true,
    preparationTime: 15,
    rating: 4.3,
  },

  {
    name: "Chicken Burger",
    description: "Grilled chicken patty with spicy mayo.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=70",
    category: "Burger",
    isVeg: false,
    isAvailable: true,
    preparationTime: 18,
    rating: 4.6,
  },

  {
    name: "Hyderabadi Biryani",
    description: "Authentic Hyderabadi chicken biryani.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=70",
    category: "Biryani",
    isVeg: false,
    isAvailable: true,
    preparationTime: 35,
    rating: 4.9,
  },

  {
    name: "Veg Biryani",
    description: "Flavorful basmati rice cooked with vegetables.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=70",
    category: "Biryani",
    isVeg: true,
    isAvailable: true,
    preparationTime: 30,
    rating: 4.4,
  },

  {
    name: "Chicken Noodles",
    description: "Spicy chicken noodles with fresh vegetables.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=600&q=70",
    category: "Chinese",
    isVeg: false,
    isAvailable: true,
    preparationTime: 20,
    rating: 4.5,
  },

  {
    name: "Paneer Fried Rice",
    description: "Chinese-style fried rice with paneer.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=70",
    category: "Chinese",
    isVeg: true,
    isAvailable: true,
    preparationTime: 20,
    rating: 4.2,
  },

  {
    name: "Veg Manchurian",
    description: "Crispy vegetable balls in spicy gravy.",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=600&q=70",
    category: "Chinese",
    isVeg: true,
    isAvailable: true,
    preparationTime: 18,
    rating: 4.3,
  },

  {
    name: "Cold Coffee",
    description: "Creamy cold coffee with ice cream.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=70",
    category: "Drinks",
    isVeg: true,
    isAvailable: true,
    preparationTime: 5,
    rating: 4.7,
  },

  {
    name: "Mango Shake",
    description: "Fresh mango milkshake.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=70",
    category: "Drinks",
    isVeg: true,
    isAvailable: true,
    preparationTime: 5,
    rating: 4.6,
  },

  {
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie served warm.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=70",
    category: "Dessert",
    isVeg: true,
    isAvailable: true,
    preparationTime: 10,
    rating: 4.8,
  },

  {
    name: "Vanilla Ice Cream",
    description: "Creamy vanilla ice cream scoop.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=70",
    category: "Dessert",
    isVeg: true,
    isAvailable: true,
    preparationTime: 2,
    rating: 4.4,
  },

  {
    name: "Masala Dosa",
    description: "Crispy dosa filled with potato masala.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=70",
    category: "South Indian",
    isVeg: true,
    isAvailable: true,
    preparationTime: 20,
    rating: 4.8,
  },

  {
    name: "Idli Sambar",
    description: "Soft idlis served with sambar and chutney.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=70",
    category: "South Indian",
    isVeg: true,
    isAvailable: true,
    preparationTime: 15,
    rating: 4.5,
  },

  {
    name: "Paneer Butter Masala",
    description: "Paneer cubes cooked in creamy tomato gravy.",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=70",
    category: "North Indian",
    isVeg: true,
    isAvailable: true,
    preparationTime: 25,
    rating: 4.8,
  },
];

module.exports = { foods };