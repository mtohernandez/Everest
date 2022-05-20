import './App.css';
import React, { useEffect, useState} from 'react';
import FOG from '../node_modules/vanta/dist/vanta.fog.min'
import Navbar from './components/Navbar/Navbar';
import NavbarH from './components/NavbarH/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Project from './pages/projects/content/Project';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function Start() {

  const [vantaEffect, setVantaEffect] = useState(0)

  useEffect(() => {
    if (!vantaEffect) {
       setVantaEffect(FOG({
         el: "#vantaback",
         mouseControls: true,
         touchControls: true,
         gyroControls: false,
         minHeight: 50.00,
         minWidth: 50.00,
         highlightColor: 0x0,
         midtoneColor: 0xa4ff,
         lowlightColor: 0xd7ff,
         baseColor: 0x2b52,
         blurFactor: 0.90,
         speed: 3.90,
         zoom: 1.20
       })
     )}       
 
     return () => {
       if (vantaEffect) vantaEffect.destroy()
     }
   }, [vantaEffect])

  const location = useLocation();

  return (
        <div className="App">
            <div className="stars">
              <div className="twinkling">
                <div className="gradient">
                  <div className="background">
                  </div>
                </div>
              </div>
            </div> 

            <div id='vantaback'></div>
              
            <div className="shape1"></div>
            


            <Navbar/>

            <div className="shape2"></div>
            
            <NavbarH/>
            
            
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route exact path= "/" element={<Home/>}/> 
                <Route path="/projects" element={<Projects/>}/>
                <Route path='/projects/:id' element={<Project/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
              </Routes> 
            </AnimatePresence>               
            
            </div>
  );
}

export default Start;
