import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {

    const navigate = useNavigate();

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


    const placeOrder = async () => {

        const token = localStorage.getItem("token");

        try {

            const res = await axios.post(
                "http://localhost:8080/order",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(res.data.message);

            navigate("/orders");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to place order"
            );

        }
    };


    if (loading) {

        return (
            <div className="checkout-page">

                <h2>
                    Loading checkout...
                </h2>

            </div>
        );
    }


    if (items.length === 0) {

        return (
            <div className="checkout-page">

                <div className="empty-checkout">

                    <h1>
                        Your Cart is Empty
                    </h1>

                    <button
                        onClick={() => navigate("/")}
                    >
                        Go to Menu
                    </button>

                </div>

            </div>
        );
    }


    let total = 0;

    for (const item of items) {

        total += item.food.price * item.quantity;

    }


    return (
        <div className="checkout-page">

            <div className="checkout-container">

                <div className="checkout-header">

                    <p>
                        CHECKOUT
                    </p>

                    <h1>
                        Order Summary
                    </h1>

                    <span>
                        Review your order before placing it
                    </span>

                </div>


                <div className="checkout-items">

                    {items.map((item) => (

                        <div
                            className="checkout-item"
                            key={item.food._id}
                        >

                            <img
                                src={item.food.image}
                                alt={item.food.name}
                            />

                            <div className="checkout-item-details">

                                <h2>
                                    {item.food.name}
                                </h2>

                                <p>
                                    ₹{item.food.price}
                                </p>

                                <span>
                                    Quantity: {item.quantity}
                                </span>

                            </div>

                            <strong>
                                ₹{item.food.price * item.quantity}
                            </strong>

                        </div>

                    ))}

                </div>


                <div className="checkout-summary">

                    <div className="summary-row">

                        <span>
                            Total Items
                        </span>

                        <strong>
                            {items.length}
                        </strong>

                    </div>


                    <div className="summary-row total">

                        <span>
                            Total Amount
                        </span>

                        <strong>
                            ₹{total}
                        </strong>

                    </div>


                    <button
                        className="place-order-button"
                        onClick={placeOrder}
                    >
                        PLACE ORDER
                    </button>


                    <button
                        className="back-cart-button"
                        onClick={() => navigate("/cart")}
                    >
                        ← Back to Cart
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Checkout;