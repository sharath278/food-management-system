import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const handlechange = (event) => {
        setFormdata((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handlesubmit = async (event) => {
        event.preventDefault();

        if (formdata.password !== formdata.confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = {
            name: formdata.name,
            email: formdata.email,
            password: formdata.password,
        };

        try {
            const res = await axios.post(
                "http://localhost:8080/signup",
                userData
            );

            console.log(res.data);

            navigate("/login");

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="register-page">

            <div className="register-card">

                <div className="register-header">
                    <h1>Create Account</h1>
                    <p>Join us and start ordering your favorite food 🍕</p>
                </div>

                <form onSubmit={handlesubmit}>

                    <div className="input-group">
                        <label>Name</label>
                        <input
                            name="name"
                            value={formdata.name}
                            placeholder="Enter your name"
                            type="text"
                            onChange={handlechange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            name="email"
                            value={formdata.email}
                            placeholder="Enter your email"
                            type="email"
                            onChange={handlechange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            name="password"
                            value={formdata.password}
                            placeholder="Enter your password"
                            type="password"
                            onChange={handlechange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input
                            name="confirmpassword"
                            value={formdata.confirmpassword}
                            placeholder="Confirm your password"
                            type="password"
                            onChange={handlechange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        Create Account
                    </button>

                </form>

                <p className="login-text">
                    Already have an account?
                    <span onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>

            </div>

        </div>
    );
};

export default Register;