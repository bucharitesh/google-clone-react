import React from 'react';
import AppDropDown from './Dropdown/AppDropdown/AppDropdown';
import User from '../../Auth/User/User';
import './RightHeader.css';

function RightHeader() {
  return (
    <div className="RightHeader__container">
      <AppDropDown/>
      <User/>
    </div>
  )
}

export default RightHeader
