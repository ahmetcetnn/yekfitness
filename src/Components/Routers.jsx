import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"
import { BiDumbbell, BiExpandHorizontal } from 'react-icons/bi';
function Routers() {

  const [toggleMenu, setToggleMenu] = useState(false);

 



  return (
    <div className='flex lg:flex-row flex-col justify-evenly '>
 
          <div className='container  flex lg:flex-row flex-col gap-4 w-full'>
            <div className='hidden sm:hidden lg:flex'>
          <button className='w-24 mr-1 pb-6 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/shoulder">Shoulder </Link></button>
          <button className='w-24 mr-1 pb-6 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/arms">Arms</Link></button>
          <button className='w-24 mr-1 pb-6 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/chest">Chest</Link></button>
          <button className='w-24 mr-1 pb-6 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/back">Back</Link></button>
          <button className='w-24 mr-1 pb-6 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/legs">Legs</Link></button>
          <button className='w-24 mr-1 pb-6 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'><Link to ="/core">Core</Link></button> </div>

          <div className='flex flex-row lg:ml-56 ml-4 justify-center text-center items-center '>
          <div className='relative'>
            <input type='text'placeholder='Search Move' className='rounded-md items-center text-center'/>
            <button type='submit' className='absolute right-0 top-0 h-full w-8 text-black border-solid rounded-md border-blue-400 hover:text-blue-500'><AiOutlineSearch/></button>
          </div>
          <button className='text-white ml-2 lg:hidden sm:flex' ><BiDumbbell  onClick={() => setToggleMenu(true)} /></button>
          {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-black transition-shadow z-50 flex flex-col  justify-center ">
            <BiDumbbell fontSize={27} className="absolute text-white top-4 right-5" onClick={() => setToggleMenu(false)} />
            <ul className="text-center text-stone-400  text-3xl flex flex-col justify-center items-center">
              
              <li className='mt-4'><a href="/shoulder" onClick={() => setToggleMenu(false)}>Shoulder</a></li>
              <li className='mt-4'><a href="/chest" onClick={() => setToggleMenu(false)}>Chest</a></li>
              <li className='mt-4'><a href="/back" onClick={() => setToggleMenu(false)}>Back</a></li>
              <li className='mt-4'><a href="/core" onClick={() => setToggleMenu(false)}>Core</a></li>
              <li className='mt-4'><a href="/legs" onClick={() => setToggleMenu(false)}>Legs</a></li>
              <li className='mt-4'><a href="/arms" onClick={() => setToggleMenu(false)}>Arms</a></li>
              
              
            </ul>
          </div>
        )}
        </div>
              </div>
                
          </div>
          
  
  )
}

export default Routers

AudioWorklet SVGDescElements 
