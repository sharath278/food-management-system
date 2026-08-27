import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

const Cart = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    const getCart = async () => {

        const token = localStorage.getItem("token");

        try {

            const res = await axios.get(
                "http://localhost:8080/cart",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setItems(res.data.cart?.items || []);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getCart();

    }, []);


    const updateQuantity = async (foodId, quantity) => {

        if (quantity < 1) {
            return;
        }

        const token = localStorage.getItem("token");

        try {

            await axios.put(
                `http://localhost:8080/cart/${foodId}`,
                {
                    quantity: quantity
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getCart();

        } catch (error) {

            console.log(error);

            alert("Failed to update quantity");

        }
    };


    const removeFromCart = async (foodId) => {

        const token = localStorage.getItem("token");

        try {

            await axios.delete(
                `http://localhost:8080/cart/${foodId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getCart();

        } catch (error) {

            console.log(error);

            alert("Failed to remove food");

        }
    };


    if (loading) {

        return (
            <div className="cart-page">

                <div className="cart-loading">
                    Loading your cart...
                </div>

            </div>
        );
    }


    if (items.length === 0) {

        return (
            <div className="cart-page">

                <div className="empty-cart">

                    <div className="empty-cart-icon">
                        🛒
                    </div>

                    <h1>
                        Your Cart is Empty
                    </h1>

                    <p>
                        Looks like you haven't added anything to your cart yet.
                    </p>

                </div>

            </div>
        );
    }


    const total = items.reduce(
        (sum, item) =>
            sum + item.food.price * item.quantity,
        0
    );


    return (
        <div className="cart-page">

            <div className="cart-container">

                <div className="cart-header">

                    <p className="cart-small-title">
                        YOUR ORDER
                    </p>

                    <h1>
                        My Cart
                    </h1>

                    <p className="cart-description">
                        Review the delicious food you've added
                    </p>

                </div>


                <div className="cart-items">

                    {items.map((item) => (

                        <div
                            className="cart-item"
                            key={item.food._id}
                        >

                            <img
                                src={item.food.image}
                                alt={item.food.name}
                                className="cart-item-image"
                            />


                            <div className="cart-item-details">

                                <h2>
                                    {item.food.name}
                                </h2>

                                <p className="cart-item-category">
                                    {item.food.category}
                                </p>

                                <p className="cart-item-price">
                                    ₹{item.food.price}
                                </p>

                            </div>


                            <div className="cart-item-quantity">

                                <span>
                                    Quantity
                                </span>

                                <div className="quantity-controls">

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.food._id,
                                                item.quantity - 1
                                            )
                                        }
                                        disabled={item.quantity === 1}
                                    >
                                        −
                                    </button>


                                    <strong>
                                        {item.quantity}
                                    </strong>


                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.food._id,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                            </div>


                            <div className="cart-item-total">

                                <span>
                                    Total
                                </span>

                                <strong>
                                    ₹{item.food.price * item.quantity}
                                </strong>

                                <button
                                    className="remove-button"
                                    onClick={() =>
                                        removeFromCart(item.food._id)
                                    }
                                >
                                    🗑 Remove
                                </button>

                            </div>

                        </div>

                    ))}

                </div>


                <div className="cart-summary">

                    <div className="summary-row">

                        <span>
                            Items
                        </span>

                        <strong>
                            {items.length}
                        </strong>

                    </div>


                    <div className="summary-row total-row">

                        <span>
                            Total
                        </span>

                        <strong>
                            ₹{total}
                        </strong>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;