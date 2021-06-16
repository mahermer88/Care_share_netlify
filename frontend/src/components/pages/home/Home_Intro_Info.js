import React from "react";
import { Link } from "react-router-dom";

const HomeIntroInfo = () => {
  return (
    <div className="intro-info">
      <h1>CareShare</h1>
      <h5>For best Medical Products</h5>
      <p>
        A trusted online medical equipment dealer and is amongst the best
        medical devices suppliers for medical devices online. One of the largest
        supply chain partners in the healthcare domain.
      </p>
      <Link to="/cart">
        <button className="btn" type="button">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default HomeIntroInfo;
