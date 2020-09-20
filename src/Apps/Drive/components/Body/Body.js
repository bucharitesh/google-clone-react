import React from 'react';
import './Body.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Body() {
  return (
    <div className="Body__container">
      <div className="Body__header">
        <button className="Header__button">My Drive <ArrowDropDownIcon fontSize="small"/></button>
      </div>
    </div>
  )
}

export default Body
