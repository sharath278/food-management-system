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

                    <Route
                        path="/"
                        element={<Home />}
                    />


                    <Route
                        path="/food/:id"
                        element={<ViewFood />}
                    />


                    <Route
                        path="/signup"
                        element={<Register />}
                    />


                    <Route
                        path="/login"
                        element={
                            <Login
                                setIsLoggedIn={setIsLoggedIn}
                                setUser={setUser}
                            />
                        }
                    />


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


                    <Route
                        path="/cart"
                        element={<Cart />}
                    />


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