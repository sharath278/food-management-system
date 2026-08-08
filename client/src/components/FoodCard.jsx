import React from "react";
import {
  Card,
  CardActions,
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

      <CardMedia
        component="img"
        className="food-card-image"
        image={info.image}
        alt={info.name}
      />

      <CardContent className="food-card-content">

        <div className="food-card-header">
          <Typography variant="h6" className="food-name">
            {info.name}
          </Typography>

          <Chip
            label={info.isVeg ? "VEG" : "NON-VEG"}
            size="small"
            color={info.isVeg ? "success" : "error"}
          />
        </div>

        <Typography
          variant="body2"
          className="food-description"
        >
          {info.description}
        </Typography>

        <div className="food-info">
          <Typography className="food-price">
            ₹{info.price}
          </Typography>

          <Typography className="food-rating">
            ⭐ {info.rating}
          </Typography>
        </div>

        <div className="food-extra">
          <span>🍽️ {info.category}</span>
          <span>⏱️ {info.preparationTime} mins</span>
        </div>

      </CardContent>

      <CardActions className="food-card-actions">
        <Button
          variant="contained"
          fullWidth
        >
          View Details
        </Button>
      </CardActions>

    </Card>
  );
};

export default FoodCard;