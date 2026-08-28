import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminFoods.css";

const AdminFoods = () => {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    const getFoods = async () => {

        try {

            const res = await axios.get(
                "http://localhost:8080/api/foods"
            );

            setFoods(res.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getFoods();

    }, []);


    const deleteFood = async (id) => {

        const token = localStorage.getItem("token");

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this food?"
        );

        if (!confirmDelete) {
            return;
        }


        try {

            await axios.delete(
                `http://localhost:8080/api/food/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Food deleted successfully");

            getFoods();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to delete food"
            );

        }
    };


    if (loading) {

        return (
            <div className="admin-foods-page">

                <div className="admin-foods-loading">
                    Loading foods...
                </div>

            </div>
        );
    }


    return (

        <div className="admin-foods-page">

            <div className="admin-foods-container">


                {/* Header */}

                <div className="admin-foods-header">

                    <div>

                        <p>
                            ADMIN PANEL
                        </p>

                        <h1>
                            Food Management
                        </h1>

                        <span>
                            Add, edit and manage your food items
                        </span>

                    </div>


                    <button
                        className="add-food-button"
                        onClick={() => navigate("/addfood")}
                    >
                        + Add Food
                    </button>

                </div>


                {/* No Foods */}

                {foods.length === 0 ? (

                    <div className="no-foods">

                        <div className="no-foods-icon">
                            🍔
                        </div>

                        <h2>
                            No Foods Found
                        </h2>

                        <p>
                            Add your first food item.
                        </p>

                    </div>

                ) : (


                    /* Food List */

                    <div className="admin-foods-list">

                        {foods.map((food) => (

                            <div
                                className="admin-food-card"
                                key={food._id}
                            >


                                {/* Image */}

                                <img
                                    src={food.image}
                                    alt={food.name}
                                />


                                {/* Food Info */}

                                <div className="admin-food-info">

                                    <h2>
                                        {food.name}
                                    </h2>

                                    <p>
                                        {food.category}
                                    </p>

                                    <strong>
                                        ₹{food.price}
                                    </strong>

                                </div>


                                {/* Actions */}

                                <div className="admin-food-actions">

                                    <button
                                        className="view-food-button"
                                        onClick={() =>
                                            navigate(
                                                `/food/${food._id}`
                                            )
                                        }
                                    >
                                        View
                                    </button>


                                    <button
                                        className="edit-food-button"
                                        onClick={() =>
                                            navigate(
                                                `/food/edit/${food._id}`
                                            )
                                        }
                                    >
                                        Edit
                                    </button>


                                    <button
                                        className="delete-food-button"
                                        onClick={() =>
                                            deleteFood(food._id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};


export default AdminFoods;