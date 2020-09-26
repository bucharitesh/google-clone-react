import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MyDrive from "../Pages/MyDrive";

function Main() {
  return (
    <div>
      <Header />
      <div className="Drive__body">
        <Sidebar />
        <MyDrive />
      </div>
    </div>
  );
}

export default Main;
