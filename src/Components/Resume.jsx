import React from 'react'
import {motion} from 'framer-motion'

function Resume() {
  return (
    <motion.div className='resume__container'
        initial={{width: 0}}
        animate={{width: "80%"}}
        exit={{x: window.innerWidth, transition: {duration: 1}}}>
        <h1>Resume: <span>Kevin Le</span></h1>
        <p>Software Engineer with 5+ years of experience emphasising on front-end development using fundamentals such as HTML5, CSS and Javascript. While having a deep understanding of ReactJS with ContextAPI/Redux as state managements and Github/Bitbucket for Version Control. Accustomed to working in an agile environment accompanied by systems such as JIRA, WRIKE, SLACK, WATSON. Extremely experienced with working in a team/group and can communicate proficiently.
        </p>
        <h2>Professional Experience</h2>
        <div className='resume-skills_container'>
          <p>Front-End Developer</p>
          <p>FullCycle Development Group/DECIBEL KC, Overland Park, KS</p>
          <ul>
            <li>Prepared and worked in required Languages, being able to read documentation and translate it to necessary needs to meet clientele expectations or wants. If it was a new language, being able to pick it up quickly and meet any time restraints.</li>
            <li>Developed and QA my own work. Working for a small team we often had to QA our own development, such has helped me gain experience and a good eye for developing quality code and foresee any possible future bugs.</li>
            <li>Ensure maximum client satisfaction by providing exceptional and personalized service, enhancing client satisfaction. Stayed in close contact with clients and communicated any roadblocks or successes to continue to earn clients trust and loyalty.</li>
            <li>Work closely with multiple developers to make sure we stayed on track. Made sure our tickets were clean and precise and our tasks were completed on time. Participated in multiple stand-ups and client meetings and prepared sprints to make sure we completed when promised.</li>
            <li>Experience in an agile environment that creates and supports a culture that encourages a team of people o work towards a common goal</li>
          </ul>
          <div>
          <h2>Relevent Skills/Soft Skills</h2>
          <div className='profesional-exp__container'>
          <ul>
            <li>HTML5/CSS</li>
            <li>BootSTrap</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>React</li>
            <li>Axios</li>
            <li>TailwindCSS</li>
            <li>Express.Js</li>
            <li>Node.js</li>
            <li>PHP/WP</li>
            <li>Version Control: GitHub/Bitbucket</li>
          </ul>
          <ul>
            <li>Strong Communication Skills</li>
            <li>Critical thinking and problem solving</li>
            <li>Attention to detail</li>
            <li>Adaptability</li>
            <li>Decision making and planning</li>
          </ul>
          </div>
          <div className='project-exp__container'>
            <h2>Projects</h2>
            <p>Professional Projects Upon Request</p>
            <p>github.com/Kevetic for repos</p>
          </div>
          </div>
        </div>
      </motion.div>
  )
}

export default Resume