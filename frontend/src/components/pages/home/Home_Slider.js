import React from "react";
import HomeProductCard from "./Home_Product_Card";
import { useGlobalContext } from "../../context/context-global";
import "./home-intro.css";

const HomeSlider = () => {
  const { dataResponse } = useGlobalContext();

  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <div className="home-slider">
        {dataResponse &&
          dataResponse.map((product) => {
            return <HomeProductCard key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default HomeSlider;
