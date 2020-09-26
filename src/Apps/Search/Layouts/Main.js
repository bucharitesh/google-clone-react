import React from "react";
import MainHeader from "../components/MainHeader";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

function Main() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route exact={true} path="/search">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
