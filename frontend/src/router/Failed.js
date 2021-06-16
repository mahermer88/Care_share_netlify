import React from "react";
import { Link } from "react-router-dom";

const Canceled = () => {
  return (
    <>
      <div className="checkout">
        <h1>Payment failed</h1>
        <p>Payment was not successful</p>
        <div>
          <Link to="/">
            <button className="btn">Back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Canceled;
