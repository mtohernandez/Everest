import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/mountain.svg'
import './navbar.css'

const NavbarH = () => {
  return (
    <div className='navbar'>
        <div className='navbar-links'>
            <div className='navbar-logo'>
                <NavLink to="/"><img src={logo} width={70} className="navbar-logo"></img></NavLink>
            </div>
            <div className='navbar-text'>
                <h1>everest</h1>
            </div>
            <div className='navbar-log'>
                <NavLink to="/login">ingresar</NavLink>
            
                <NavLink to='/dashboard'>dashboard</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavbarH