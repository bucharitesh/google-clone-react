import React, { lazy } from "react";
// import "./SearchPage.css";
import { useStateValue } from "../../../StateProvider";
import { Switch, Route } from "react-router-dom";

import All from "../pages/SearchPage/All/All";
import Images from "../pages/SearchPage/Images/Images";
import News from "../pages/SearchPage/News/News";
import Videos from "../pages/SearchPage/Videos/Videos";

import SearchHeader from "../components/SearchHeader/SearchHeader";

const Maps = lazy(() => import("../../Maps"));

function SearchPage() {
  const [{ term }] = useStateValue();
  return (
    <div className="searchPage">
      <SearchHeader />
      {term && (
        <Switch>
          <Route exact={true} path="/search/q/all">
            <All />
          </Route>
          <Route exact={true} path="/search/q/images">
            <Images />
          </Route>
          <Route exact={true} path="/search/q/news">
            <News />
          </Route>
          <Route exact={true} path="/maps">
            <Maps />
          </Route>
          <Route exact={true} path="/search/q/videos">
            <Videos />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default SearchPage;
