import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../components/context/context-user";

const Success = () => {
  const { stateUser, clearCart, dispatchUser } = useUserContext();

  useEffect(() => {
    if (stateUser.cart.cartList.length !== 0) {
      clearCart(dispatchUser);
    }
  }, [clearCart, dispatchUser, stateUser.cart.cartList]);

  return (
    <>
      <div className="checkout">
        <h1>Thank you for your order</h1>
        <p>
          We are currently processing your order and will send you a
          confirmation email shortly
        </p>
        <div>
          <Link to="/">
            <button className="btn">Back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
