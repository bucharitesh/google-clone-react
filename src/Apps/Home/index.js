import React from "react";
import RightHeader from "../../Components/RightHeader/RightHeader";
import "./Home.css";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

import { ReactComponent as EasyPharmIcon } from "../../Assets/Images/EasyPharmIcon.svg";
import BuchariteshIcon from "../../Assets/Images/BuchariteshIcon";
import { ReactComponent as TodoIcon } from "../../Assets/Images/TodoIcon.svg";
import { ReactComponent as GoogleIcon } from "../../Assets/Images/GoogleIcon.svg";
import { ReactComponent as GoogleDriveIcon } from "../../Assets/Images/GoogleDriveIcon.svg";

function Home() {
  return (
    <div className="Home__container">
      <ul class="circles">
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
          <Link to="/search">
            <div className="Home__apps">
              <GoogleIcon height="40" width="40" />
              <p>Google Search</p>
            </div>
          </Link>
          <Link to="/drive">
            <div className="Home__apps">
              <GoogleDriveIcon height="40" width="40" />
              <p>Google Drive</p>
            </div>
          </Link>
          <a href="https://bucharitesh.in">
            <div className="Home__apps">
              <BuchariteshIcon height="40" width="40" />
              <p>bucharitesh.in</p>
            </div>
          </a>
          <a href="https://easypharm.web.app">
            <div className="Home__apps">
              <EasyPharmIcon height="40" width="40" />
              <p>EasyPharm</p>
            </div>
          </a>
          <a href="https://todo.bucharitesh.in">
            <div className="Home__apps">
              <TodoIcon height="40" width="40" />
              <p>Todo App</p>
            </div>
          </a>
        </div>
      </div>
      <div className="Home__footer">
        <p>Made with ❤ by Ritesh Bucha</p>
      </div>
    </div>
  );
}

export default Home;
