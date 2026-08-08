import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../components/FoodCard";
import "./Home.css";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:8080/api/foods");
      setFoods(res.data);
    };

    getdata();
  }, []);

  return (
    <div className="home-container">
      <h1>All Food Items</h1>

      <div className="food-grid">
        {foods.map((obj) => (
          <FoodCard key={obj._id} info={obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;