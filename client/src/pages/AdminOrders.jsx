import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminOrders.css";

const AdminOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    const statuses = [
        "Placed",
        "Confirmed",
        "Preparing",
        "Out for Delivery",
        "Delivered",
        "Cancelled"
    ];


    const getOrders = async () => {

        const token = localStorage.getItem("token");

        try {

            const res = await axios.get(
                "http://localhost:8080/admin/orders",
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


    const updateStatus = async (orderId, status) => {

        const token = localStorage.getItem("token");

        try {

            await axios.put(
                `http://localhost:8080/admin/orders/${orderId}`,
                {
                    status: status
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getOrders();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to update order status"
            );

        }
    };


    if (loading) {

        return (
            <div className="admin-orders-page">

                <div className="admin-orders-loading">
                    Loading orders...
                </div>

            </div>
        );
    }


    if (orders.length === 0) {

        return (
            <div className="admin-orders-page">

                <div className="admin-orders-container">

                    <div className="admin-orders-header">

                        <p>
                            ADMIN PANEL
                        </p>

                        <h1>
                            Manage Orders
                        </h1>

                    </div>


                    <div className="no-orders">

                        <div className="no-orders-icon">
                            📦
                        </div>

                        <h2>
                            No Orders Found
                        </h2>

                        <p>
                            There are no customer orders yet.
                        </p>

                    </div>

                </div>

            </div>
        );
    }


    return (
        <div className="admin-orders-page">

            <div className="admin-orders-container">

                <div className="admin-orders-header">

                    <p>
                        ADMIN PANEL
                    </p>

                    <h1>
                        Manage Orders
                    </h1>

                    <span>
                        View and manage all customer orders
                    </span>

                </div>


                <div className="admin-orders-list">

                    {orders.map((order) => (

                        <div
                            className="admin-order-card"
                            key={order._id}
                        >

                            <div className="admin-order-top">

                                <div className="order-id">

                                    <span>
                                        Order ID
                                    </span>

                                    <strong>
                                        #{order._id.slice(-6)}
                                    </strong>

                                </div>


                                <div className="admin-order-status">
                                    {order.status}
                                </div>

                            </div>


                            <div className="customer-info">

                                <h3>
                                    Customer
                                </h3>

                                <p>
                                    {order.user?.name}
                                </p>

                                <span>
                                    {order.user?.email}
                                </span>

                            </div>


                            <div className="admin-order-items">

                                {order.items.map((item) => (

                                    <div
                                        className="admin-order-item"
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


                            <div className="admin-order-bottom">

                                <div>

                                    <span>
                                        Total Amount
                                    </span>

                                    <strong>
                                        ₹{order.totalAmount}
                                    </strong>

                                </div>


                                <div className="status-control">

                                    <label>
                                        Update Status
                                    </label>

                                    <select
                                        value={order.status}
                                        onChange={(e) =>
                                            updateStatus(
                                                order._id,
                                                e.target.value
                                            )
                                        }
                                    >

                                        {statuses.map((status) => (

                                            <option
                                                key={status}
                                                value={status}
                                            >
                                                {status}
                                            </option>

                                        ))}

                                    </select>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default AdminOrders;