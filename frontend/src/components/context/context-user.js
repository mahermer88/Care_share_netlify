import React, { useEffect, useReducer, useContext } from "react";
import idChecker from "../handlers/handle-backend/handle-id-checker";
import reducerUser from "../reducer/reducer-user";
import { useAssistantContext } from "./context-assistant";
import upDate from "../handlers/handle-backend/handle-update";

const UserContext = React.createContext();

const userDefault = {
  cart: {
    cartList: [],
    total: 0,
    amount: 0,
  },
  wishlist: [],
  messages: [],
  _id: "",
  email: "",
  username: "",
  password: "",
  createdAt: "",
  updatedAt: "",
};

const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : userDefault;

const UserProvider = ({ children }) => {
  const { dispatchAssistant } = useAssistantContext();
  const [stateUser, dispatchUser] = useReducer(
    reducerUser,
    userFromLocalStorage
  );

  useEffect(() => {
    if (stateUser.email) {
      localStorage.setItem("user", JSON.stringify(stateUser));
      upDate(stateUser, dispatchAssistant);
    }
  }, [stateUser, dispatchAssistant]);

  useEffect(() => {
    if (stateUser.cart.cartList) {
      dispatchUser({ type: "GET_TOTALS" });
    }
  }, [stateUser.cart.cartList]);

  // CART
  const addToCartList = (product, dispatchUser) => {
    if (!stateUser.email) {
      dispatchAssistant({ type: "REGISTER_FIRST" });
    } else {
      if (!idChecker(stateUser.cart.cartList, product)) {
        dispatchUser({ type: "ADD_TO_CARTLIST", payload: product });
        dispatchAssistant({ type: "LIKE" });
      }
    }
  };
  const removeFromCartList = (product, dispatchUser) => {
    if (!stateUser.email) {
      dispatchAssistant({ type: "REGISTER_FIRST" });
    } else {
      dispatchUser({ type: "REMOVE_FROM_CARTLIST", payload: product });
      dispatchAssistant({ type: "DISLIKE" });
    }
  };
  const toggleAmount = (_id, type, dispatchUser) => {
    dispatchUser({ type: "TOGGLE_AMOUNT", payload: { _id, type } });
    dispatchAssistant({ type: "TOGGLE_AMOUNT", payload: { _id, type } });
  };
  const clearCart = (dispatchUser) => {
    dispatchUser({ type: "CLEAR_CART" });
  };

  // Wishlist
  const addToWishlist = (product, dispatchUser) => {
    if (!stateUser.email) {
      dispatchAssistant({ type: "REGISTER_FIRST" });
    } else {
      if (!idChecker(stateUser.wishlist, product)) {
        dispatchUser({ type: "ADD_TO_WISHLIST", payload: product });
        dispatchAssistant({ type: "LIKE" });
      }
    }
  };
  const removeFromWishlist = (product, dispatchUser) => {
    dispatchUser({ type: "REMOVE_FROM_WISHLIST", payload: product });
    dispatchAssistant({ type: "DISLIKE" });
  };

  const removeFromMessagesList = (message, dispatchUser) => {
    dispatchUser({ type: "REMOVE_FROM_MESSAGES", payload: message });
    dispatchAssistant({ type: "DISLIKE" });
  };

  return (
    <UserContext.Provider
      value={{
        stateUser,
        dispatchUser,
        addToCartList,
        removeFromCartList,
        toggleAmount,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        removeFromMessagesList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
