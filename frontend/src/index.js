import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "../src/components/context/context-global";
import { AssistantProvider } from "../src/components/context/context-assistant";
import { UserProvider } from "../src/components/context/context-user";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AssistantProvider>
        <UserProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </UserProvider>
      </AssistantProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
