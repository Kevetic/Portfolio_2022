import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import About from './About'
import Resume from './Resume'
import Home from './Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

  
  function Nav() {
    return (
      <Router>
       <Home/>
        <AnimatePresence>
          <Routes>
            <Route exact path="/"/>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </Router>

    )

}

export default Nav