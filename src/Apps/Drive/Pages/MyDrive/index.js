import React from "react";
import "./MyDrive.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function MyDrive() {
  return (
    <div className="Body__container">
      <div className="Body__header">
        <button className="Header__button">
          My Drive <ArrowDropDownIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default MyDrive;
