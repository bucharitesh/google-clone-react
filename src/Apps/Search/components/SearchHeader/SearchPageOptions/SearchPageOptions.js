import React from 'react';
import './SearchPageOptions.css';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPageOptions() {
  return (
    <div className="SearchPage__options">
      <div className="searchPage__optionLeft">
        <div className="searchPage__option active">
          <SearchIcon fontSize="small" />
          <Link to="/search">All</Link>
        </div>
        <div className="searchPage__option">
          <ImageOutlinedIcon fontSize="small" />
          <Link to="/images">Images</Link>
        </div>
        <div className="searchPage__option">
          <RoomOutlinedIcon fontSize="small" />
          <Link to="/maps">Maps</Link>
        </div>
        <div className="searchPage__option">
          <DescriptionOutlinedIcon fontSize="small" />
          <Link to="/news">News</Link>
        </div>
        <div className="searchPage__option">
          <MoreVertIcon fontSize="small" />
          <Link to="/more">More</Link>
        </div>
      </div>
      <div className="searchPage__optionRight">
        <div className="searchPage__option phone__options">
            <Link to="/settings">Settings</Link>
          </div>
          <div className="searchPage__option phone__options">
            <Link to="/tools">Tools</Link>
        </div>
      </div>
    </div>
  )
}

export default SearchPageOptions
