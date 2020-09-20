import React from 'react';
import RightHeader from '../../../../Components/RightHeader/RightHeader';
import './Header.css';
import { Link } from 'react-router-dom';

import { ReactComponent as GoogleDriveIcon } from '../../../../Assets/Images/GoogleDriveIcon.svg';
import { ReactComponent as SearchIcon } from '../../../../Assets/Images/SearchIcon.svg';

function Header() {
  return (
    <div className="Header__container">
        <div className="Header__left">
          <Link to='/drive'>
            <GoogleDriveIcon height="40" width="40"/>
            <p>Drive</p>
          </Link>
          <div className="Header__search">
            <SearchIcon className="Header__searchlogo"/>
            <input type="text" aria-label="Search in Drive" placeholder="Search in Drive"/>
          </div>
        </div>
        <div className="Header__right">
          <RightHeader/>
        </div>
    </div>
  )
}

export default Header
