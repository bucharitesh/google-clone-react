import React from "react";
import "./Drive.css";

import { Switch, Route } from "react-router-dom";

import Main from "./Container/Main";

function Drive({ match }) {
  return (
    <div>
      <Switch>
        <Route exact path={[`${match.url}`]}>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default Drive;
