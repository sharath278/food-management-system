import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn, setUser }) => {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    });

    // Handles input changes
    const handleinput = (event) => {
        setFormdata((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    // Handles login
    const submithandle = async (event) => {
        event.preventDefault();

        try {

            // Send login details to backend
            const res = await axios.post(
                "http://localhost:8080/login",
                formdata
            );

            console.log(res.data);

            // Get JWT from backend
            const token = res.data.token;

            // Store JWT in browser
            localStorage.setItem("token", token);

            // Store logged-in user's information in App state
            setUser(res.data.user);

            // Tell App that user is logged in
            setIsLoggedIn(true);

            // Go to home page
            navigate("/");

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">
                    <h1>Welcome Back 👋</h1>

                    <p>
                        Login to continue ordering your favorite food
                    </p>
                </div>

                <form onSubmit={submithandle}>

                    <div className="login-input-group">

                        <label>Email</label>

                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={formdata.email}
                            onChange={handleinput}
                        />

                    </div>

                    <div className="login-input-group">

                        <label>Password</label>

                        <input
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            value={formdata.password}
                            onChange={handleinput}
                        />

                    </div>

                    <button
                        className="login-btn"
                        type="submit"
                    >
                        Login
                    </button>

                </form>

                <p className="signup-text">

                    Don't have an account?

                    <span onClick={() => navigate("/signup")}>
                        Sign Up
                    </span>

                </p>

            </div>

        </div>
    );
};

export default Login;