import React from "react";
import "./About.css";

const About = () => {

    return (
        <div className="about-page">

            <div className="about-container">

                <p className="about-small-title">
                    ABOUT US
                </p>

                <h1>
                    Welcome to Foodie
                </h1>

                <p className="about-description">
                    Foodie is a simple food management and ordering
                    platform where customers can explore delicious
                    food, add items to their cart, and place orders.
                </p>


                <div className="about-cards">

                    <div className="about-card">

                        <div className="about-icon">
                            🍔
                        </div>

                        <h2>
                            Delicious Food
                        </h2>

                        <p>
                            Explore a variety of food items and
                            discover something delicious for every
                            craving.
                        </p>

                    </div>


                    <div className="about-card">

                        <div className="about-icon">
                            🛒
                        </div>

                        <h2>
                            Easy Ordering
                        </h2>

                        <p>
                            Add your favorite food to the cart and
                            place your order with just a few clicks.
                        </p>

                    </div>


                    <div className="about-card">

                        <div className="about-icon">
                            📦
                        </div>

                        <h2>
                            Track Orders
                        </h2>

                        <p>
                            View your orders and keep track of their
                            current status.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;