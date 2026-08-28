import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {

    const navigate = useNavigate();


    return (
        <div className="admin-dashboard-page">

            <div className="admin-dashboard-container">

                <div className="admin-dashboard-header">

                    <p>
                        ADMIN PANEL
                    </p>

                    <h1>
                        Admin Dashboard
                    </h1>

                    <span>
                        Manage your restaurant from one place
                    </span>

                </div>


                <div className="admin-dashboard-cards">


                    {/* Manage Foods */}

                    <div className="admin-dashboard-card">

                        <div className="admin-card-icon">
                            🍔
                        </div>

                        <div className="admin-card-content">

                            <h2>
                                Manage Foods
                            </h2>

                            <p>
                                Add, edit and manage the food items
                                available in your restaurant.
                            </p>

                        </div>


                        <button
                            onClick={() => navigate("/admin/foods")}
                        >
                            Manage Foods
                        </button>

                    </div>


                    {/* Manage Orders */}

                    <div className="admin-dashboard-card">

                        <div className="admin-card-icon">
                            📦
                        </div>

                        <div className="admin-card-content">

                            <h2>
                                Manage Orders
                            </h2>

                            <p>
                                View customer orders and update
                                their order status.
                            </p>

                        </div>


                        <button
                            onClick={() => navigate("/admin/orders")}
                        >
                            Manage Orders
                        </button>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;