import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
import k from './assets/K.png'
import Loader from './Loader';

import {
    BrowserRouter as Router,
    Link,
    useNavigate
  } from "react-router-dom";

function Home() {
    const [isActive, setIsActive] = useState(true)
    const [heroActive, setHeroActive] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    let navigate = useNavigate()

    useEffect(() => {
        if(window.location.reload){
            navigate('/Portfolio_2022')
        }
    }, [])

    const handleBurger = () => {
      setIsOpen(!isOpen)
    }
    
  return (
    <motion.div
    initial={{width: 0,  opacity: 0, transition: {duration: 1}}}
    animate={{width: "100%", opacity:1, transition: {duration: 1}}}
    exit={{x: window.innerWidth, transition: {duration: .5}}}
    >
    <div className={`intro ${isActive ? 'show' : 'hide'}`}>
      <div className='profile__container'>
        <div className='profile-img__container'>
        </div>
        <div className='profile-info__container'>
          <h1>Kevin Le</h1>
          <p>Software Developer</p>
          <p>Kansas City, MO</p>
          <span>"Most of my Years were spent at a start up company in a front-end developer role. I am passionate about tech and eager to always expand my knowledge and skills"...  
            <Link className='about-readmore' to='/about'onClick={()=>{
              setHeroActive(true)
              setIsActive(false)
            }} >Read More</Link></span>

        </div>
      </div>
    </div>
    <header className={isActive ? 'show' : 'hide'}>
      <nav>
        <div className={`mobile__menu ${isOpen ? 'open' : 'close'}`} onClick={handleBurger}>
        X
        <ul className={`mobile__nav-ul ${isActive ? 'show' : 'hide'}`}>
          <motion.li
          initial={{opacity: 0}}
          animate={{opacity: 1, transform: {duration: 3}}}
          >
            <Link to='/' className={`${heroActive ?  'show' : 'hide'}`}
              onClick={()=> {
              setHeroActive(false)
              setIsActive(false)
            }}>
            </Link>
          </motion.li>
          <li>
            <Link to='/home' className='' onClick={()=>{
              setIsActive(true)
              setHeroActive(false)
              }}>Home</Link>
          </li>
          <li>
            <Link to='/about' className='' onClick={()=>{
              setHeroActive(true)
              setIsActive(false)
            }}>About</Link>
          </li>
          <li>
            <Link to='/resume' className='' onClick={()=>{
              setHeroActive(true)
              setIsActive(false)
            }}>Resume</Link>
          </li>
        </ul>
        </div>
        <ul className={`nav-ul ${isActive ? 'show' : 'hide'}`}>
          <motion.li
          initial={{opacity: 0}}
          animate={{opacity: 1, transform: {duration: 3}}}
          >
            <Link to='/' className={`btn-hover color-8 nav__bar-k ${heroActive ?  'show' : 'hide'}`}
              onClick={()=> {
              setHeroActive(false)
              setIsActive(false)
            }}>
              <img src={k}/>
            </Link>
          </motion.li>
          <li>
            <Link to='/home' className='btn-hover color-8' onClick={()=>{
              setIsActive(true)
              setHeroActive(false)
              }}>Home</Link>
          </li>
          <li>
            <Link to='/about' className='btn-hover color-8' onClick={()=>{
              setHeroActive(true)
              setIsActive(false)
            }}>About</Link>
          </li>
          <li>
            <Link to='/resume' className='btn-hover color-8' onClick={()=>{
              setHeroActive(true)
              setIsActive(false)
            }}>Resume</Link>
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