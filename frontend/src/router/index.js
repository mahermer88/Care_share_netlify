import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart.js";
import NotFound from "./NotFound";
import Info from "./Info";
import Success from "./Success";
import Canceled from "./Failed";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/info/:productId">
          <Info />
        </Route>
        <Route path="/payment/success">
          <Success />
        </Route>
        <Route path="/payment/canceled">
          <Canceled />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
