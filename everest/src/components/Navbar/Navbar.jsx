import React, {useEffect, useState, useRef} from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import svg from '../../assets/search.svg'
import svgPlay from '../../assets/Play.svg'
import audio from '../../assets/mount.mp3'
import {motion} from 'framer-motion'
import ReactPlayer from 'react-player'

const Navbar = () => {

  const [search, setSearch] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();

    const toggle = () =>{
        const prevValue = isPlaying;

        setIsPlaying(!prevValue)

        if(!prevValue){
            audioPlayer.current.play();
        }else{
            audioPlayer.current.pause()
        }
    }

  const appearA = () => {
    if(!search){
      setSearch(true);
    }else{
      setSearch(false)
    }
  }

  const handle = (event) => {
    if(event.key === 'Enter'){
      console.log("Key pressed")
    }
  }

  return (
    <div className='navbar'>
      <button onClick={appearA}><motion.img src={svg} width="50" height="50" whileHover={{scale:1.1}} whileTap={{scale:0.9}}/></button>
      {search ? <motion.input initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='searchbar' type='text' placeholder='Busqueda' onKeyPress={handle}/> : <></>}
        <nav class="navMenu">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/">Home</NavLink>
            <div class="dot"></div>
        </nav>
        <motion.div className='audioA' intial={{opacity: 0.4}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <ReactPlayer controls={true} url={audio} playing={false} width='230px' height='200px'></ReactPlayer>
        </motion.div>
    </div>
  )
}

export default Navbar