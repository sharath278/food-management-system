import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
} from "@mui/material";

import "./FoodCard.css";

const FoodCard = ({ info }) => {
  return (
    <Card className="food-card">

      {/* Image */}
      <div className="food-image-container">

        <CardMedia
          component="img"
          loading="lazy"
          image={info.image}
          alt={info.name}
          className="food-card-image"
        />

        <div className="food-badge">
          <Chip
            label={info.isVeg ? "VEG" : "NON-VEG"}
            size="small"
            color={info.isVeg ? "success" : "error"}
          />
        </div>

      </div>

      {/* Content */}
      <CardContent className="food-card-content">

        <Typography
          variant="h6"
          className="food-name"
        >
          {info.name}
        </Typography>

        <Typography
          variant="body2"
          className="food-description"
        >
          {info.description}
        </Typography>

        <div className="food-bottom">

          <div>
            <Typography className="food-price">
              ₹{info.price}
            </Typography>

            <div className="food-meta">
              <span>⭐ {info.rating}</span>
              <span>🍴 {info.category}</span>
            </div>
          </div>

          <div className="food-time">
            ⏱ {info.preparationTime} mins
          </div>

        </div>

      </CardContent>

      {/* Button */}
      <div className="food-card-actions">

        <Button
          variant="contained"
          fullWidth
          className="view-button"
        >
          View Details
        </Button>

      </div>

    </Card>
  );
};

export default FoodCard;