import React from "react";
import { Link } from "react-router-dom";
import "./SearchHeader.css";

import SearchBar from "../SearchBar";
import SearchPageOptions from "./SearchPageOptions";

import RightHeader from "../../../../Components/RightHeader";

function SearchHeader() {
  return (
    <div className="searchPage__header">
      <div className="searchPage__headerTop">
        <div className="seachPage____headerLeft">
          <Link to="/search">
            <img
              className="searchPage__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </Link>
          <div className="searchPage__headerBody">
            <SearchBar hideButtons />
          </div>
        </div>
        <div className="seachPage____headerRight">
          <RightHeader />
        </div>
      </div>

      <div className="searchPage__headerPhone">
        <div className="searchPage__headerTopPhone">
          <Link to="/search">
            <img
              className="searchPage__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </Link>
          <RightHeader />
        </div>
        <SearchBar hideButtons />
        <div className="pageOptions__phone">
          <SearchPageOptions />
        </div>
      </div>

      <div className="searchPage__bottom">
        <div className="searchPage__options">
          <SearchPageOptions />
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
