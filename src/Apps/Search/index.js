import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Layouts/Main";
import SearchPage from "./Layouts/SearchPage";

function Search({ match }) {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={`${match.url}`}>
            <Main />
          </Route>
          <Route path={`${match.url}/q`}>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Search;
