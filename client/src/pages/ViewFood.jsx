import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    Button,
} from "@mui/material";

import "./ViewFood.css";

const ViewFood = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [food, setFood] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getdata = async () => {

            try {

                const res = await axios.get(
                    `http://localhost:8080/api/food/${id}`
                );

                setFood(res.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        getdata();

    }, [id]);


    if (loading) {

        return (
            <div className="loading-container">
                <div className="loader"></div>
                <p>Loading food details...</p>
            </div>
        );

    }


    return (

        <div className="view-food-page">

            {/* Page Header */}

            <div className="view-food-header">

                <p className="header-small">
                    OUR MENU
                </p>

                <h1>
                    Food Details
                </h1>

                <p className="header-description">
                    Discover everything about this delicious dish
                </p>

            </div>


            {/* Back Button */}

            <div className="back-container">

                <Button
                    onClick={() => navigate(-1)}
                    className="back-button"
                >
                    ← Back to Menu
                </Button>

            </div>


            {/* Main Card */}

            <Card className="view-food-card">


                {/* LEFT - IMAGE */}

                <div className="food-image-section">

                    <CardMedia
                        component="img"
                        image={food.image}
                        alt={food.name}
                        className="view-food-image"
                    />


                    {/* Veg Badge */}

                    <div className="image-badge">

                        <Chip
                            label={
                                food.isVeg
                                    ? "🌱 VEG"
                                    : "🍗 NON-VEG"
                            }
                            className={
                                food.isVeg
                                    ? "veg-chip"
                                    : "nonveg-chip"
                            }
                        />

                    </div>


                    {/* Category */}

                    <div className="category-badge">

                        {food.category}

                    </div>

                </div>


                {/* RIGHT - CONTENT */}

                <CardContent className="view-food-content">


                    {/* Food Title */}

                    <div className="food-heading">

                        <Typography
                            variant="h3"
                            className="view-food-name"
                        >
                            {food.name}
                        </Typography>

                    </div>


                    {/* Description */}

                    <Typography
                        className="view-food-description"
                    >
                        {food.description}
                    </Typography>


                    {/* Price */}

                    <div className="price-section">

                        <span className="price-label">
                            Price
                        </span>

                        <div className="view-food-price">
                            ₹{food.price}
                        </div>

                    </div>


                    {/* Divider */}

                    <div className="divider"></div>


                    {/* Food Information */}

                    <div className="food-details-grid">


                        <div className="detail-box">

                            <div className="detail-icon">
                                🍴
                            </div>

                            <div>

                                <span>
                                    Category
                                </span>

                                <strong>
                                    {food.category}
                                </strong>

                            </div>

                        </div>


                        <div className="detail-box">

                            <div className="detail-icon">
                                ⭐
                            </div>

                            <div>

                                <span>
                                    Rating
                                </span>

                                <strong>
                                    {food.rating} / 5
                                </strong>

                            </div>

                        </div>


                        <div className="detail-box">

                            <div className="detail-icon">
                                ⏱
                            </div>

                            <div>

                                <span>
                                    Preparation
                                </span>

                                <strong>
                                    {food.preparationTime} mins
                                </strong>

                            </div>

                        </div>


                        <div className="detail-box">

                            <div className="detail-icon">
                                {food.isAvailable ? "✓" : "×"}
                            </div>

                            <div>

                                <span>
                                    Availability
                                </span>

                                <strong
                                    className={
                                        food.isAvailable
                                            ? "available"
                                            : "unavailable"
                                    }
                                >
                                    {food.isAvailable
                                        ? "Available"
                                        : "Not Available"}
                                </strong>

                            </div>

                        </div>

                    </div>


                    {/* Order Section */}

                    <div className="order-section">

                        <div className="order-note">

                            <span>🔥</span>

                            <p>
                                {food.isAvailable
                                    ? "This item is currently available"
                                    : "This item is currently unavailable"}
                            </p>

                        </div>


                        <Button
                            variant="contained"
                            fullWidth
                            className="order-button"
                            disabled={!food.isAvailable}
                        >
                            {food.isAvailable
                                ? "ORDER NOW"
                                : "NOT AVAILABLE"}
                        </Button>

                    </div>


                </CardContent>

            </Card>

        </div>
    );
};

export default ViewFood;