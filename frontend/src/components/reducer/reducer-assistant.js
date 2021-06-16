export const reducerAssistant = (state, action) => {
  // General Pages
  if (action.type === "CLOSE") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: false,
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: action.payload,
    };
  }

  // Home Page
  if (action.type === "START") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Hello there ....",
    };
  }

  if (action.type === "REGISTER_FIRST") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "please sign in or register first ....",
    };
  }

  if (action.type === "LIKE") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Thank you..",
    };
  }

  if (action.type === "DISLIKE") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "ooooops...",
    };
  }

  // Product- Info Page
  if (action.type === "ENJOY") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Enjoy with more info..",
    };
  }

  if (action.type === "SCROLL") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Scroll to see all photos",
    };
  }

  //  About Page
  if (action.type === "TEAM") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Send message to our team...",
    };
  }

  if (action.type === "NEW_MESSAGE") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Your message has been sent... Thank you",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Invalid inputs, please check...",
    };
  }

  // Cart Page
  if (action.type === "CART") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Nice to have you here...",
    };
  }

  if (action.type === "EMPTY_CART") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Your bag is empty...",
    };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    if (action.payload.type === "inc") {
      return {
        ...state,
        isAssistant: true,
        assistantContent: "Yes, best choose",
      };
    }
    if (action.payload.type === "dec") {
      return {
        ...state,
        isAssistant: true,
        assistantContent: "Okay..",
      };
    }
  }

  // Sign up - Sign in Page
  if (action.type === "NEW_REGISTER") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "User has been registered",
    };
  }

  if (action.type === "LOG_IN") {
    return {
      ...state,
      isAssistant: true,
      assistantContent: "Welcome back...",
    };
  }

  throw new Error("no matching action type");
};

export default reducerAssistant;
