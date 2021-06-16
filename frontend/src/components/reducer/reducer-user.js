const reducerUser = (state, action) => {
  if (action.type === "RESET") {
    return {
      ...state,
      email: null,
    };
  }

  if (action.type === "GET_USER") {
    return {
      ...action.payload,
    };
  }

  //  CART
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: {
        cartList: [],
        total: 0,
        amount: 0,
      },
    };
  }

  if (action.type === "ADD_TO_CARTLIST") {
    return {
      ...state,
      cart: {
        cartList: [...state.cart.cartList, action.payload],
        total: 0,
        amount: 0,
      },
    };
  }

  if (action.type === "REMOVE_FROM_CARTLIST") {
    return {
      ...state,
      cart: {
        cartList: state.cart.cartList.filter(
          (Item) => Item._id !== action.payload._id
        ),
        total: 0,
        amount: 0,
      },
    };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.cartList.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      cart: {
        cartList: state.cart.cartList,
        total,
        amount,
      },
    };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart.cartList
      .map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return {
      ...state,
      cart: {
        cartList: tempCart,
      },
    };
  }

  // WISHLIST
  if (action.type === "ADD_TO_WISHLIST") {
    return {
      ...state,
      wishlist: [...state.wishlist, action.payload],
    };
  }

  if (action.type === "REMOVE_FROM_WISHLIST") {
    return {
      ...state,
      wishlist: state.wishlist.filter(
        (Item) => Item._id !== action.payload._id
      ),
    };
  }

  // MESSAGES
  if (action.type === "ADD_TO_MESSAGES") {
    return {
      ...state,
      messages: [action.payload, ...state.messages],
    };
  }

  if (action.type === "REMOVE_FROM_MESSAGES") {
    return {
      ...state,
      messages: state.messages.filter(
        (Item) => Item._id !== action.payload._id
      ),
    };
  }

  throw new Error("no matching action type");
};

export default reducerUser;
