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
          <p>I’ve been an engineer for a little over 5 years. Most of those years spent at a start up company in a front-end developer role. I have experience in the fundamentals such as HTML,CSS,Javascript and I’m experienced in the MERN stack, emphasis on React using tools such as redux and contextapi to help. i’ve also been exposed to sprinkles of other tech stacks and I like to consider myself a google search expert. I’m familiar with working in an agile environment. I have used to systems like WATSON,JIRA, WRIKE and Slack as ticket management, transactional and communication. 
          </p>
        </div>
      </div>
    </div>
    <button className={`intro__button ${isActive ? 'show' : 'hide'}`} onClick={() => setIsActive(!isActive)}>Kevin Le</button>
  </div>
}

export default Intro