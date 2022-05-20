import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'
import {motion} from 'framer-motion'
import { variables } from '../../API/Api'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch()
    const data = await res.json();
    console.log(data)
  }

  return (
    <motion.div initial={{ opacity: 0}} 
                animate={{opacity: 1}} 
                exit={{opacity: 0}}
                className='login-whole'>
        <form className='login-form'>
            <h1>Sign In</h1>
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
            <h5>¿No tienes cuenta?</h5>
            <NavLink to='/register'>Registrate</NavLink>
        </form>
    </motion.div>
  )
}

export default Login