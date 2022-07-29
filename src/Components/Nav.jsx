import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Intro from './Intro'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  
  function Nav() {
    return (
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/kevetic/resume'>Resume</Link>
            </li>
            <li>
              <Link to='/kevetic/about'>About</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/kevetic/"/>
          <Route path="/kevetic/resume" element={<Resume />} />
          <Route path="/kevetic/about" element={<About />} />
        </Routes>
      </Router>

    )

}

export default Nav