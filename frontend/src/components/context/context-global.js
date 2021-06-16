import React, { useContext } from "react";
import { useFetch } from "../handlers/handle-backend/useFetch";

const AppContext = React.createContext();

// main link for products
// const url = "http://localhost:5000/api/products";
const url = "https://mighty-badlands-17333.herokuapp.com/api/products";

const AppProvider = ({ children }) => {
  const { notification, dataResponse } = useFetch(url);

  return (
    <AppContext.Provider
      value={{
        notification,
        dataResponse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
