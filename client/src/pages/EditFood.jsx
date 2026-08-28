import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./EditFood.css";


const EditFood = () => {

    const { id } = useParams();

    const navigate = useNavigate();


    const [formdata, setFormdata] = useState({

        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        isVeg: false,
        isAvailable: true,
        preparationTime: "",
        rating: ""

    });


    const [loading, setLoading] = useState(true);


    // =========================
    // Get Existing Food
    // =========================

    useEffect(() => {

        const getdata = async () => {

            try {

                const res = await axios.get(
                    `http://localhost:8080/api/food/${id}`
                );

                setFormdata(res.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };


        getdata();

    }, [id]);


    // =========================
    // Handle Inputs
    // =========================

    const inputhandle = (event) => {

        const {
            name,
            value,
            type,
            checked
        } = event.target;


        setFormdata((prev) => ({

            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : value

        }));

    };


    // =========================
    // Submit Updated Food
    // =========================

    const submithandle = async (event) => {

        event.preventDefault();


        const token = localStorage.getItem("token");


        try {

            await axios.put(

                `http://localhost:8080/api/food/${id}`,

                formdata,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );


            alert("Food updated successfully");


            navigate(`/food/${id}`);


        } catch (error) {

            console.log(error);


            alert(
                error.response?.data?.message ||
                "Failed to update food"
            );

        }

    };


    // =========================
    // Loading
    // =========================

    if (loading) {

        return (

            <div className="edit-loading">

                <div className="edit-loader"></div>

                <p>
                    Loading food details...
                </p>

            </div>

        );

    }


    // =========================
    // Page
    // =========================

    return (

        <div className="edit-food-page">


            {/* Header */}

            <div className="edit-food-header">

                <p className="edit-small-title">
                    FOOD MANAGEMENT
                </p>

                <h1>
                    Edit Food
                </h1>

                <p>
                    Update the details of your food item
                </p>

            </div>


            {/* Form Card */}

            <div className="edit-food-container">

                <form onSubmit={submithandle}>


                    {/* Food Name */}

                    <div className="edit-form-group">

                        <label>
                            Food Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formdata.name}
                            onChange={inputhandle}
                            placeholder="Enter food name"
                        />

                    </div>


                    {/* Description */}

                    <div className="edit-form-group">

                        <label>
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formdata.description}
                            onChange={inputhandle}
                            placeholder="Enter food description"
                        />

                    </div>


                    {/* Price + Category */}

                    <div className="edit-form-row">


                        <div className="edit-form-group">

                            <label>
                                Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={formdata.price}
                                onChange={inputhandle}
                                placeholder="Enter price"
                            />

                        </div>


                        <div className="edit-form-group">

                            <label>
                                Category
                            </label>

                            <select
                                name="category"
                                value={formdata.category}
                                onChange={inputhandle}
                            >

                                <option value="">
                                    Select category
                                </option>

                                <option value="Pizza">
                                    Pizza
                                </option>

                                <option value="Burger">
                                    Burger
                                </option>

                                <option value="Biryani">
                                    Biryani
                                </option>

                                <option value="Chinese">
                                    Chinese
                                </option>

                                <option value="Drinks">
                                    Drinks
                                </option>

                                <option value="Dessert">
                                    Dessert
                                </option>

                                <option value="South Indian">
                                    South Indian
                                </option>

                                <option value="North Indian">
                                    North Indian
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* Image */}

                    <div className="edit-form-group">

                        <label>
                            Image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            value={formdata.image}
                            onChange={inputhandle}
                            placeholder="Enter image URL"
                        />

                    </div>


                    {/* Preparation + Rating */}

                    <div className="edit-form-row">


                        <div className="edit-form-group">

                            <label>
                                Preparation Time
                            </label>

                            <input
                                type="number"
                                name="preparationTime"
                                value={formdata.preparationTime}
                                onChange={inputhandle}
                                placeholder="Minutes"
                            />

                        </div>


                        <div className="edit-form-group">

                            <label>
                                Rating
                            </label>

                            <input
                                type="number"
                                name="rating"
                                value={formdata.rating}
                                onChange={inputhandle}
                                step="0.1"
                                min="0"
                                max="5"
                                placeholder="0 - 5"
                            />

                        </div>

                    </div>


                    {/* Checkboxes */}

                    <div className="edit-checkbox-container">


                        <label className="edit-checkbox">

                            <input
                                type="checkbox"
                                name="isVeg"
                                checked={formdata.isVeg}
                                onChange={inputhandle}
                            />

                            <span>
                                Vegetarian
                            </span>

                        </label>


                        <label className="edit-checkbox">

                            <input
                                type="checkbox"
                                name="isAvailable"
                                checked={formdata.isAvailable}
                                onChange={inputhandle}
                            />

                            <span>
                                Available
                            </span>

                        </label>


                    </div>


                    {/* Buttons */}

                    <div className="edit-button-container">


                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() =>
                                navigate(`/food/${id}`)
                            }
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="update-button"
                        >
                            Update Food
                        </button>


                    </div>


                </form>

            </div>

        </div>

    );

};


export default EditFood;