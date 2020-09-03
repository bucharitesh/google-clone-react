import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/';
import About from './pages/About/';
import SearchPage from './pages/SearchPage/';

function Search() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact={true} path = "/search">
            <Home />
          </Route>
          <Route exact={true} path="/search/q/">
            <SearchPage />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Search;
