import React, { useState, useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";
import AddFood from "./pages/AddFood";
import ViewFood from "./pages/ViewFood";
import EditFood from "./pages/EditFood";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AdminOrders from "./pages/AdminOrders";
import AdminDashboard from "./pages/AdminDashboard";
import AdminFoods from "./pages/AdminFoods";
import About from "./pages/About";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    const [user, setUser] = useState(null);

    const [authLoading, setAuthLoading] = useState(true);


    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            setAuthLoading(false);

            return;
        }


        const getUser = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:8080/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUser(res.data.user);

                setIsLoggedIn(true);

            } catch (error) {

                console.log(error);

                localStorage.removeItem("token");

                setIsLoggedIn(false);

                setUser(null);

            } finally {

                setAuthLoading(false);

            }
        };


        getUser();

    }, []);


    if (authLoading) {

        return (
            <div>
                Checking authentication...
            </div>
        );
    }


    return (

        <div>

            <BrowserRouter>

                <Navbar
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    user={user}
                    setUser={setUser}
                />


                <Routes>


                    {/* HOME */}

                    <Route
                        path="/"
                        element={<Home />}
                    />


                    {/* ABOUT */}

                    <Route
                        path="/about"
                        element={<About />}
                    />


                    {/* VIEW FOOD */}

                    <Route
                        path="/food/:id"
                        element={<ViewFood user={user} />}
                    />


                    {/* REGISTER */}

                    <Route
                        path="/signup"
                        element={<Register />}
                    />


                    {/* LOGIN */}

                    <Route
                        path="/login"
                        element={
                            <Login
                                setIsLoggedIn={setIsLoggedIn}
                                setUser={setUser}
                            />
                        }
                    />


                    {/* ADMIN - ADD FOOD */}

                    <Route
                        path="/addfood"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                role="admin"
                                element={<AddFood />}
                            />
                        }
                    />


                    {/* ADMIN - EDIT FOOD */}

                    <Route
                        path="/food/edit/:id"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                role="admin"
                                element={<EditFood />}
                            />
                        }
                    />


                    {/* CART */}

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />


                    {/* CHECKOUT */}

                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                element={<Checkout />}
                            />
                        }
                    />


                    {/* MY ORDERS */}

                    <Route
                        path="/orders"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                element={<Orders />}
                            />
                        }
                    />


                    {/* ADMIN DASHBOARD */}

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                role="admin"
                                element={<AdminDashboard />}
                            />
                        }
                    />


                    {/* ADMIN FOOD MANAGEMENT */}

                    <Route
                        path="/admin/foods"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                role="admin"
                                element={<AdminFoods />}
                            />
                        }
                    />


                    {/* ADMIN ORDER MANAGEMENT */}

                    <Route
                        path="/admin/orders"
                        element={
                            <ProtectedRoute
                                isLoggedIn={isLoggedIn}
                                user={user}
                                role="admin"
                                element={<AdminOrders />}
                            />
                        }
                    />


                </Routes>

            </BrowserRouter>

        </div>
    );
};


export default App;