import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import profile from './assets/profile.JPG'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Intro() {
  const [isActive, setIsActive] = useState(true)

  return <div>
    <div className={`intro ${isActive ? 'show' : 'hide'}`}>
      <div className='profile__container'>
        <div className='profile-img__container'>
          {/* <img src={profile} alt='profile_picture'/> */}
        </div>
        <div className='profile-info__container'>
          <h1>Kevin Le</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Iaculis nunc sed augue lacus viverra. Auctor urna nunc id cursus metus aliquam eleifend mi in. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Mauris nunc congue nisi vitae suscipit. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Tristique sollicitudin nibh sit amet commodo nulla. Amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum faucibus. At ultrices mi tempus imperdiet nulla malesuada pellentesque.
          </p>
        </div>
      </div>
    </div>
    <button className={`intro__button ${isActive ? 'show' : 'hide'}`} onClick={() => setIsActive(!isActive)}>Kevin Le</button>
  </div>
}

export default Intro