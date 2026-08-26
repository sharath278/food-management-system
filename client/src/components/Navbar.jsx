import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
import "./Navbar.css";

// =========================
// Restaurant Icon
// =========================
const RestaurantIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 2v8" />
    <path d="M4 2v8a3 3 0 0 0 6 0V2" />
    <path d="M7 13v9" />
    <path d="M16 2v20" />
    <path d="M16 2c3 2 4 5 4 8h-4" />
  </svg>
);

// =========================
// Shopping Cart Icon
// =========================
const ShoppingCartIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="20" r="1" />
    <circle cx="19" cy="20" r="1" />
    <path d="M3 4h2l2.5 11h11L21 7H6" />
  </svg>
);

// =========================
// Navbar
// =========================
const Navbar = ({
  isLoggedIn,
  setIsLoggedIn,
  user,
  setUser,
}) => {

  // Logout function
  const handleLogout = () => {

    // Remove JWT
    localStorage.removeItem("token");

    // Remove user information
    setUser(null);

    // Change login state
    setIsLoggedIn(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="navbar"
    >

      <Toolbar className="navbar-toolbar">

        {/* ================= Logo ================= */}

        <Box
          component={Link}
          to="/"
          className="navbar-logo"
        >

          <RestaurantIcon />

          <Typography
            variant="h5"
            className="navbar-logo-text"
          >
            Foodie
          </Typography>

        </Box>


        {/* ================= Navigation ================= */}

        <Box className="navbar-navigation">

          <Button
            component={Link}
            to="/"
            className="navbar-nav-button"
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/about"
            className="navbar-nav-button"
          >
            About
          </Button>

        </Box>


        {/* ================= User + Login / Logout ================= */}

        {isLoggedIn ? (

          <>
            {/* Show user's name */}

            <Typography
              className="navbar-user-name"
              sx={{
                color: "white",
                fontWeight: 600,
                marginRight: "15px",
              }}
            >
              Hi, {user?.name}
            </Typography>


            {/* Logout button */}

            <Button
              onClick={handleLogout}
              className="navbar-auth-button"
            >
              Logout
            </Button>
          </>

        ) : (

          <Button
            component={Link}
            to="/login"
            className="navbar-auth-button"
          >
            Login
          </Button>

        )}


        {/* ================= Cart ================= */}

        <IconButton
          component={Link}
          to="/cart"
          className="navbar-cart-button"
        >
          <ShoppingCartIcon />
        </IconButton>

      </Toolbar>

    </AppBar>
  );
};

export default Navbar;