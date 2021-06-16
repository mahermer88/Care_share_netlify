import React, { useEffect } from "react";
import { useUserContext } from "../../context/context-user";
import ProfileCartItem from "./Profile_Cart_Item";
import { useStripe } from "@stripe/react-stripe-js";
import handleCheckout from "../checkout/stripe-checkout";
import { useAssistantContext } from "../../context/context-assistant";

const ProfileCartContainer = () => {
  const { dispatchAssistant } = useAssistantContext();
  const { stateUser, dispatchUser, clearCart } = useUserContext();
  const cart = stateUser.cart.cartList;
  const total = stateUser.cart.total;

  // stripe
  const stripe = useStripe();
  const customer_email = stateUser.email;

  useEffect(() => {
    if (cart.length === 0) {
      dispatchAssistant({ type: "EMPTY_CART" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((product) => {
          return <ProfileCartItem key={product._id} product={product} />;
        })}
      </div>
      {/* cart footer */}
      <div className="cart-footer">
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total / 100}</span>
          </h4>
        </div>
        <button className="btn" onClick={() => clearCart(dispatchUser)}>
          clear cart
        </button>
        <button
          className="btn"
          onClick={(e) => handleCheckout(e, stripe, cart, customer_email)}
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default ProfileCartContainer;
