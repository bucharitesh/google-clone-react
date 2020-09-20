import React from "react";
import "./Home.css";

import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
