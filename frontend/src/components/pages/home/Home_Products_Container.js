import React from "react";
import HomeProductCard from "./Home_Product_Card";
import { useGlobalContext } from "../../context/context-global";
import "./home-products-list.css";

const HomeProductsContainer = React.memo(() => {
  const { dataResponse } = useGlobalContext();

  return (
    <div className="products-container">
      <div className="products-list">
        {dataResponse &&
          dataResponse.map((product) => {
            return <HomeProductCard key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
});

export default HomeProductsContainer;
