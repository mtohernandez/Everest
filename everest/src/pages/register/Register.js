import React, { useState } from 'react'
import './register.css'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();
    const [company, setCompany] = useState();
    const [rol, setRol] = useState();


  return (
    <motion.div initial={{ opacity: 0}} 
                animate={{opacity: 1}} 
                exit={{opacity: 0}}
                className='login-whole'>
        <form className='login-form'>
            <h1>Register</h1>
            <div className='login-input'>
                <input
                type='text'
                className='form-control'
                placeholder='Email'
                autoFocus/>
            </div>
            <div className='login-input'>
                <input
                type='text'
                className='form-control'
                placeholder='Password'
                />
            </div>
            <div className='login-input'>
                <input
                type='text'
                className='form-control'
                placeholder='Username'
                />
            </div>
            <div className='login-input'>
                <input
                type='date'
                className='form-control'
                placeholder='Age'
                />
            </div>
            <h5>¿Ya tienes cuenta?</h5>
            <NavLink to='/login'>Inicia sesión</NavLink>
        </form>
    </motion.div>
  )
}

export default Register