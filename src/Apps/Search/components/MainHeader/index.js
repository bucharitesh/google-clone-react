import React from "react";
import { Link } from "react-router-dom";
import RightHeader from "../../../../Components/RightHeader";
import "./MainHeader.css";

function MainHeader() {
  return (
    <div className="MainHeader__container">
      <div className="MainHeader__headerLeft"></div>
      <div className="MainHeader__headerRight">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <RightHeader />
      </div>
    </div>
  );
}

export default MainHeader;
