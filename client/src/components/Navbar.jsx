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
const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        background: "linear-gradient(90deg, #1565c0, #1976d2)",
      }}
    >

      <Toolbar
        sx={{
          minHeight: "72px !important",
          px: { xs: 2, md: 5 },
        }}
      >

        {/* ================= Logo ================= */}

        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            color: "white",
            textDecoration: "none",
            mr: { xs: 2, md: 5 },
          }}
        >

          <RestaurantIcon />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            Foodie
          </Typography>

        </Box>


        {/* ================= Navigation ================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 2 },
            flexGrow: 1,
          }}
        >

          <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: "15px",
              textTransform: "uppercase",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            Home
          </Button>


          


          <Button
            component={Link}
            to="/about"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: "15px",
              textTransform: "uppercase",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            About
          </Button>

        </Box>


        {/* ================= Login ================= */}

        <Button
          component={Link}
          to="/login"
          sx={{
            color: "white",
            border: "1px solid rgba(255,255,255,0.8)",
            borderRadius: "8px",
            px: 2.5,
            textTransform: "uppercase",
            fontWeight: 600,

            "&:hover": {
              backgroundColor: "white",
              color: "#1565c0",
            },
          }}
        >
          Login
        </Button>


        {/* ================= Cart ================= */}

        <IconButton
          component={Link}
          to="/cart"
          sx={{
            color: "white",
            ml: 1,

            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.12)",
            },
          }}
        >
          <ShoppingCartIcon />
        </IconButton>

      </Toolbar>

    </AppBar>
  );
};

export default Navbar;