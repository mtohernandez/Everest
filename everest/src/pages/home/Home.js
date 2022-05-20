import React from 'react'
import './home.css'
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}} 
    animate={{opacity: 1}} 
    exit={{opacity: 0}}
    >
      <div className='home-whole'>
        <div className='home-text'>
          <h1>ever</h1>
          <h1>est</h1>
        </div>
        <div className='home-subtext'>
          <p>“Mount Everest ain’t got “#$% on me,<br/> ‘Cause I’m on top of the word,<br/> I’m on top of the world, yeah” </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Home