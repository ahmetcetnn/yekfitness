import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firesbase"
import { AuthContext } from '../Context/AuthContext';


function Register() {
  const {currentUser} =useContext(AuthContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError] =useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword  (auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      alert("User Created")
    })
    .catch((error) => {
      setError(true)
    });
  }

  return (
    <div className=" flex flex-col items-center justify-center lg:bg-cover sm:bg-right sm:bg-repeat-y   "
    style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg')" }}>
    
        
      <form onSubmit={handleLogin}>
        <div className="justify-center text-center h-screen items-center flex flex-col text-black"
        >
          <br></br>
          <input
            className="border-solid border text-black border-x-gray-900 lg:w-96 lg:h-12 w-72  rounded-md z-10"
            type="email"
            placeholder="Enter Your E-Mail."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="border-solid border border-x-gray-900 lg:w-96 lg:h-12 w-72 rounded-md mt-2"
            placeholder="Enter Your Password."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="border-solid border cursor-pointer bg-white text-slate-800 mt-2 lg:w-96 lg:h-12 w-72 rounded-md"
            disabled={!email || !password}
            type="submit"
          >
            {" "}
            Sign Up
          </button>
          
          
          
          
          
            
          
            <p className='text-white'>You have an account? <Link to="/login" className='hover:text-sky-700'> Log In</Link></p>
      </div>
      
      </form>
      </div>

)}

export default Register
