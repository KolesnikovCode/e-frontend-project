import React from "react";

import Home from "./home/Home";
import About from "./about/About";

import { Switch, Route } from "react-router-dom";

const Body: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Body;
