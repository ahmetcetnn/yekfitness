import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firesbase"


function Register() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError] =useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword  (auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      setError(true)
    });
  }

  return (
    <div className="container flex flex-col items-center   ">    
  <form onSubmit={handleLogin}>
  <div className="justify-center text-center items-center flex flex-col text-black">
        
          
          <br></br>
            <input type="email" 
            className='border-solid border border-x-gray-900 w-96 h-12 mt-56 rounded-md'
              placeholder='Enter Your E-Mail.' 
              value={email} 
              onChange={e => setEmail(e.target.value)}></input>
            <input type="password" 
            className='border-solid border border-x-gray-900 mt-2 w-96 h-12 rounded-md'
              placeholder='Enter Your Password.'
              value={password} 
              onChange={e => setPassword(e.target.value)}></input>
          <button
          className='border-solid border cursor-pointer bg-white text-slate-800 mt-2 w-96 h-12 rounded-md'
          disabled={!email || !password} type="submit" > Sign Up</button>
          
          
          
          
          
            
          
            <p>You have an account? <Link to="/login" className='hover:text-sky-700'> Log In</Link></p>
      </div>
      
      </form>
      </div>

)}

export default Register
