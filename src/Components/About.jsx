import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div className='about__container'
        initial={{width: '0%'}}
        animate={{width: "50%"}}>
        <h1>About Me: <span>Kevin Le</span></h1>
        <p>I’ve been an engineer for a little over 5 years. Most of those years spent at a start up company in a front-end developer role. i am a software developer who is passionate about tech and eager to always expand my knowledge and skills. I'd love to work with a company that matches my values of how I believe people should be treated and is reflected in how they treat their clients/customers. I’m excited to use my talents of strong interpersonal communication paired with my ability to adapt quickly alongside my skills in web development to become a part of a fast-paced, quality-driven team to build better experiences for a growing world. Feel free to take a look at the resume section of this portfolio.
          </p>
        <h2>Skills/EXP</h2>
        <div className='about-skills__container'>
          <ul>
            <li>HTML5</li>
            <li>CSS/SASS</li>
            <li>Javascript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
          </ul>
          <ul>
            <li>Axios</li>
            <li>TailwindCSS</li>
            <li>Express.Js</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>PHP/WP</li>
            <li>Version Control: GitHub/Bitbucket</li>
          </ul>
        </div>
      </motion.div>
  )
}

export default About