import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import About from './About'
import Resume from './Resume'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

function Home() {
    const [isActive, setIsActive] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        if(window.location.reload){
            navigate('/')
        }
    }, [])
    
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "80%"}}
    exit={{x: window.innerWidth, transition: {duration: 1}}}
    >
    <div className={`intro ${isActive ? 'show' : 'hide'}`}>
      <div className='profile__container'>
        <div className='profile-img__container'>
        </div>
        <div className='profile-info__container'>
          <h1>Kevin Le</h1>
          <p>Software Developer</p>
          <p>Kansas City, MO</p>
        </div>
      </div>
    </div>
    <header className={isActive ? 'show' : 'hide'}>
      <nav>
        <motion.ul
          initial={{width: 0}}
          animate={{width: "100%"}}
          exit={{x: window.innerWidth, transition: {duration: 0.1}}}
          >
          <li>
            <Link to='/' className='btn-1' onClick={()=>setIsActive(true)}>Home</Link>
          </li>
          <li>
            <Link to='/about' onClick={()=>setIsActive(false)}>About</Link>
          </li>
          <li>
            <Link to='/resume' onClick={()=>setIsActive(false)}>Resume</Link>
          </li>
        </motion.ul>
        <div className={`nav__footer ${isActive ? 'show' : 'hide'}`}>
          <h1>Contact</h1>
          <p>Email: Kevetic@outlook.com</p>
          <p>Github: <a href='github.com/kevetic' target="_blank">Kevetic@github</a></p>
        </div>
      </nav>
    </header>
  </motion.div>
  )
}

export default Home