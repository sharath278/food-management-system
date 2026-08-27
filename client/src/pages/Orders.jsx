import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    const getOrders = async () => {

        const token = localStorage.getItem("token");

        try {

            const res = await axios.get(
                "http://localhost:8080/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setOrders(res.data.orders || []);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getOrders();

    }, []);


    if (loading) {

        return (
            <div className="orders-page">

                <div className="orders-loading">
                    Loading your orders...
                </div>

            </div>
        );
    }


    if (orders.length === 0) {

        return (
            <div className="orders-page">

                <div className="empty-orders">

                    <div className="empty-orders-icon">
                        📦
                    </div>

                    <h1>
                        No Orders Yet
                    </h1>

                    <p>
                        You haven't placed any orders yet.
                    </p>

                </div>

            </div>
        );
    }


    return (
        <div className="orders-page">

            <div className="orders-container">

                <div className="orders-header">

                    <p className="orders-small-title">
                        YOUR ORDERS
                    </p>

                    <h1>
                        My Orders
                    </h1>

                    <p className="orders-description">
                        View your previous orders
                    </p>

                </div>


                <div className="orders-list">

                    {orders.map((order) => (

                        <div
                            className="order-card"
                            key={order._id}
                        >

                            <div className="order-top">

                                <div>

                                    <span>
                                        Order ID
                                    </span>

                                    <strong>
                                        #{order._id.slice(-6)}
                                    </strong>

                                </div>


                                <div className="order-status">

                                    {order.status}

                                </div>

                            </div>


                            <div className="order-items">

                                {order.items.map((item) => (

                                    <div
                                        className="order-item"
                                        key={item._id}
                                    >

                                        <div>

                                            <h3>
                                                {item.name}
                                            </h3>

                                            <p>
                                                ₹{item.price} × {item.quantity}
                                            </p>

                                        </div>


                                        <strong>
                                            ₹{item.price * item.quantity}
                                        </strong>

                                    </div>

                                ))}

                            </div>


                            <div className="order-bottom">

                                <span>
                                    Total Amount
                                </span>

                                <strong>
                                    ₹{order.totalAmount}
                                </strong>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default Orders;