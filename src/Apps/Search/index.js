import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Layouts/Main";
import SearchPage from "./Layouts/SearchPage";

function Search() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/search">
            <Main />
          </Route>
          <Route path="/search/q">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Search;
