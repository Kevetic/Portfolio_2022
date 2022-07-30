import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'

import {
    BrowserRouter as Router,
    Link,
    useNavigate
  } from "react-router-dom";

function Home() {
    const [isActive, setIsActive] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        if(window.location.reload){
            navigate('/Portfolio_2022')
        }
    }, [])
    
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
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
        <ul className={`nav-ul ${isActive ? 'show' : 'hide'}`}>
          <li>
            <Link to='/home' className='btn-hover color-8' onClick={()=>setIsActive(true)}>Home</Link>
          </li>
          <li>
            <Link to='/about' className='btn-hover color-8' onClick={()=>setIsActive(false)}>About</Link>
          </li>
          <li>
            <Link to='/resume' className='btn-hover color-8' onClick={()=>setIsActive(false)}>Resume</Link>
          </li>
        </ul>
        <div className={`nav__footer ${isActive ? 'show' : 'hide'}`}>
            <h1>Socials:</h1>
            <SocialIcon url="https://instagram.com/kevetic" />
            <SocialIcon url="https://discord.com/kevetic" />
            <SocialIcon url="https://github.com/kevetic" />
        </div>
      </nav>
    </header>
  </motion.div>
  )
}

export default Home