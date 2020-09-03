import React from 'react';
import {
  Link
} from "react-router-dom";
import './About.css';

import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RightHeader from '../../../../Components/RightHeader/RightHeader';

function About( match ) {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to={`/search`}>Home</Link>
        </div>
        <div className = "home__headerRight">
          <RightHeader/>
        </div>
      </div>

      <div className="about__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
        <div className="aboutPage__bodytext">
          <p>This is a webpage created for learning Google Search API using <a href="https://reactjs.org/">REACT</a>.
          </p>
          <br/>
          <p> Please give a <strong>STAR</strong> and feel free to <strong>FORK</strong> this Repository -> <a href="https://github.com">https://github.com/</a>
          </p>
          <br/>
          <p> There are 100 queries search per day so if its not working come back tommorrow thanks :)
          </p>
          <br/>
          <p>
            This project is made by <a href="https://bucharitesh.in">RITESH BUCHA</a> <a href="https://bucharitesh.in">@bucharitesh.in</a>
          </p>
          <br/>
          <p>
            You can visit my website or follow me on
          </p>
          <br/>
          <div className="about_Socialicons">
            <a href="https://bucharitesh.in"><LanguageIcon fontSize="large"/></a>
            <a href="https://www.facebook.com/bucharitesh"><FacebookIcon fontSize="large"/></a>
            <a href="https://www.instagram.com/bucha._.ritesh/"><InstagramIcon fontSize="large"/></a>
            <a href="https://www.linkedin.com/in/bucharitesh"><LinkedInIcon fontSize="large"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
