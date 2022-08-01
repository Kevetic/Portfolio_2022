import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

function Loader() {
  return (
    <motion.div className='loader__container'
    drag
    whileDrag={{ scale: 2 }}
    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    dragConstraints={{ left: -300, right: 500, bottom: 300, top: -200 }}
    >
        <motion.p
        drag
        className='drag__k'
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -300, right: 500, bottom: 300, top: -200 }}
        initial={{right:'-500%'}}
        transition={{ type: "spring", stiffness: 100 }}
        animate={{position:'relative', right:'60%', top: '50%', }}
        >K</motion.p>
        <motion.p
        drag
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -400, right: 500, bottom: 300, top: -200 }}
        initial={{right:'0', top: '0', opacity: 0}}
        animate={{position:'relative', opacity:1, right:'60%', top: '50%', transition: {duration: 2}}}
        >e</motion.p>
        <motion.p
        drag
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -500, right: 500, bottom: 300, top: -200 }}
        initial={{right:'0', top: '0', opacity: 0}}
        animate={{position:'relative', opacity:1, right:'60%', top: '50%', transition: {duration: 2.5}}}
        >v</motion.p>
        <motion.p
        drag
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -600, right: 500, bottom: 300, top: -200 }}
        initial={{right:'0', top: '0', opacity: 0}}
        animate={{position:'relative', opacity:1, right:'60%', top: '50%', transition: {duration: 2.8}}}
        >i</motion.p>
        <motion.p
        drag
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -700, right: 500, bottom: 300, top: -200 }}
        initial={{right:'0', top: '0', opacity: 0}}
        animate={{position:'relative', opacity:1, right:'60%', top: '50%', transition: {duration: 3}}}
        >n</motion.p>
        <motion.p
        drag
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -800, right: 500, bottom: 300, top: -200 }}
        initial={{right:'0', top: '0', opacity: 0}}
        animate={{position:'relative', opacity:1, right:'60%', top: '50%', transition: {duration: 3.5}}}
        >L</motion.p>
        <motion.p
        drag
        whileDrag={{ scale: 2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: -900, right: 500, bottom: 300, top: -200 }}
        initial={{right:'0', top: '0', opacity: 0}}
        animate={{position:'relative', opacity:1, right:'60%', top: '50%', transition: {duration: 3.8}}}
        >e</motion.p>
    </motion.div>
  )
}

export default Loader