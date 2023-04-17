import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"
function Routers() {
  return (
    <div className='flex lg:flex-row flex-col justify-evenly '>
 
          <div className='container  flex lg:flex-row flex-col gap-4 w-full'>
            <div className='hidden sm:hidden lg:flex'>
          <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/shoulder">Shoulder </Link></button>
          <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/arms">Arms</Link></button>
          <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/chest">Chest</Link></button>
          <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/back">Back</Link></button>
          <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/legs">Legs</Link></button>
          <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/core">Core</Link></button> </div>

          <div className='flex flex-row lg:ml-40 ml-4 justify-center text-center items-center '>
            <input type='text'placeholder='Search Move' className='rounded-md items-center  text-center'/>
            <button type='submit' className='ml-4 w-8 text-white border-solid rounded-md border-blue-400 hover:text-blue-500'><AiOutlineSearch/></button>
          </div>
              </div>
                
          </div>
          
  
  )
}

export default Routers
