import React from "react";
import "./SearchPageOptions.css";
import { NavLink } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";

function SearchPageOptions() {
  return (
    <div className="SearchPage__options">
      <div className="searchPage__optionLeft">
        <NavLink to="/search/q/all">
          <div className="searchPage__option">
            <SearchIcon fontSize="small" />
            All
          </div>
        </NavLink>

        <NavLink to="/search/q/images">
          <div className="searchPage__option">
            <ImageOutlinedIcon fontSize="small" />
            Images
          </div>
        </NavLink>

        <NavLink to="/search/q/maps">
          <div className="searchPage__option">
            <RoomOutlinedIcon fontSize="small" />
            Maps
          </div>
        </NavLink>

        <NavLink to="/search/q/news">
          <div className="searchPage__option">
            <DescriptionOutlinedIcon fontSize="small" />
            News
          </div>
        </NavLink>

        <NavLink to="/search/q/videos">
          <div className="searchPage__option">
            <PlayCircleFilledOutlinedIcon fontSize="small" />
            Videos
          </div>
        </NavLink>

        {/* <div className="searchPage__option">
          <MoreVertIcon fontSize="small" />
          More
        </div> */}
      </div>
    </div>
  );
}

export default SearchPageOptions;
