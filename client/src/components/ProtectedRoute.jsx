import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, user, element, role }) => {

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    if (role && user?.role !== role) {
        return <Navigate to="/" />;
    }

    return element;
};

export default ProtectedRoute;