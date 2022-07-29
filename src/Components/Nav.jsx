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
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/resume'>Resume</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>

    )

}

export default Nav