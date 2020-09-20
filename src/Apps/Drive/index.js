import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import './Drive.css';

function Drive() {
  return (
    <div>
        <Header/>
        <div className="Drive__body">
          <Sidebar/>
          <Body/>
        </div>
    </div>
  )
}

export default Drive;
