import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddFood.css';

const AddFood = () => {

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

    const inputhandle = (event) => {

        const { name, value, type, checked } = event.target;

        setFormdata((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    const submithandle = (event) => {

        event.preventDefault();

        console.log(formdata);

        axios.post("http://localhost:8080/api/food", formdata);

        navigate("/");
    };

    return (
        <div className="add-food-page">

            <div className="food-form-container">

                <h1>Add New Food</h1>

                <p className="form-subtitle">
                    Add a new food item to your menu
                </p>

                <form onSubmit={submithandle}>

                    {/* Food Name */}
                    <div className="form-group">

                        <label>Food Name</label>

                        <input
                            name="name"
                            value={formdata.name}
                            onChange={inputhandle}
                            placeholder="Enter food name"
                        />

                    </div>


                    {/* Description */}
                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            name="description"
                            value={formdata.description}
                            onChange={inputhandle}
                            placeholder="Enter food description"
                        ></textarea>

                    </div>


                    {/* Price + Category */}
                    <div className="form-row">

                        <div className="form-group">

                            <label>Price</label>

                            <input
                                type="number"
                                name="price"
                                value={formdata.price}
                                onChange={inputhandle}
                                placeholder="₹ Enter price"
                            />

                        </div>


                        <div className="form-group">

                            <label>Category</label>

                            <select
                                name="category"
                                value={formdata.category}
                                onChange={inputhandle}
                            >

                                <option value="">
                                    Select category
                                </option>

                                <option value="Pizza">Pizza</option>
                                <option value="Burger">Burger</option>
                                <option value="Biryani">Biryani</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Dessert">Dessert</option>
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
                    <div className="form-group">

                        <label>Image URL</label>

                        <input
                            name="image"
                            value={formdata.image}
                            onChange={inputhandle}
                            placeholder="Paste food image URL"
                        />

                    </div>


                    {/* Preparation + Rating */}
                    <div className="form-row">

                        <div className="form-group">

                            <label>Preparation Time</label>

                            <input
                                type="number"
                                name="preparationTime"
                                value={formdata.preparationTime}
                                onChange={inputhandle}
                                placeholder="Minutes"
                            />

                        </div>


                        <div className="form-group">

                            <label>Rating</label>

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
                    <div className="checkbox-container">

                        <label className="checkbox-label">

                            <input
                                type="checkbox"
                                name="isVeg"
                                checked={formdata.isVeg}
                                onChange={inputhandle}
                            />

                            Vegetarian

                        </label>


                        <label className="checkbox-label">

                            <input
                                type="checkbox"
                                name="isAvailable"
                                checked={formdata.isAvailable}
                                onChange={inputhandle}
                            />

                            Available

                        </label>

                    </div>


                    {/* Button */}
                    <button
                        type="submit"
                        className="add-food-button"
                    >
                        Add Food
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddFood;