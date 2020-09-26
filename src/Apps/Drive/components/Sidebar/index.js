import React from "react";
import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import { ReactComponent as AddButton } from "../../../../Assets/Images/AddButton.svg";
import { ReactComponent as MyDriveIcon } from "./SidebarIcons/MyDriveIcon.svg";
import StorageIcon from "@material-ui/icons/Storage";
import LinearProgress from "@material-ui/core/LinearProgress";

function Sidebar() {
  return (
    <div className="Sidebar__container">
      <button className="uploadButton">
        <AddButton height="36" width="36" />
        <p>Add</p>
      </button>

      <div className="Sidebar__menu">
        <NavLink to="/drive">
          <div className="Sidebar__menuItem">
            <MyDriveIcon fill="#1967d2" className="Sidebar__menuImage" />
            <p>My Drive</p>
          </div>
        </NavLink>
        <NavLink to="/drive/files">
          <div className="Sidebar__menuItem">
            <MyDriveIcon fill="#1967d2" className="Sidebar__menuImage" />
            <p>My Files</p>
          </div>
        </NavLink>
        <div className="Sidebar__divider" />
        <div className="Sidebar__Storage">
          <div className="Sidebar__menuItem">
            <StorageIcon className="Sidebar__menuImage" />
            <p>Storage (87% full)</p>
          </div>
          <div className="Sidebar_StorageUsed">
            <p>13.2 GB of 15 GB used</p>
            <LinearProgress
              value="80"
              variant="determinate"
              className="Sidebar_Storagebar"
            />
            <button className="Sidebar_StorageBuyButton">Buy Storage</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
