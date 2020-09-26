import React from "react";
import RightHeader from "../../Components/RightHeader";
import "./Home.css";
import { Link } from "react-router-dom";
import Welcome from "./Components/Welcome";

import Icon from "../../Components/Icon";
import { Apps } from "../../Links";

function Home() {
  return (
    <div className="Home__container">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="Home__header">
        <RightHeader />
      </div>
      <div className="Home__body">
        <Welcome />
        <div className="Home__appContainer">
          {Apps.map(({ path, icon, appName }) => (
            <Link to={path}>
              <div className="Home__apps">
                <Icon icon={icon} size="40" />
                <p>{appName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="Home__footer">
        <p>Made with ❤ by Ritesh Bucha</p>
      </div>
    </div>
  );
}

export default Home;
