import React from 'react';
import './Home.css';

import SearchBar from '../../../../Components/SearchBar/SearchBar';
import MainHeader from '../../components/MainHeader/MainHeader';

function Home() {
  return (
    <div className="home">
      <MainHeader/>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
        <div className="home__inputContainer">
          <SearchBar/>
        </div>
      </div>

    </div>
  )
}

export default Home
