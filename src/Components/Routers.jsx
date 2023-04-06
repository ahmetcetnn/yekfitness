import React from 'react'
import { Link } from 'react-router-dom'
function Routers() {
  return (
    <div className='container flex flex-row gap-4 w-full'>
    <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'

    ><Link to ="/shoulder">Shoulder </Link></button>
    <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'

    ><Link to ="/arms">Arms</Link></button>
    <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'

    ><Link to ="/chest">Chest</Link></button>
    <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'

    ><Link to ="/back">Back</Link></button>
    <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'

    ><Link to ="/legs">Legs</Link></button>
    <button className='w-24 rounded-md h-5 text-white bg-slate-700 hover:text-blue-500 cursor-pointer'

    ><Link to ="/core">Core</Link></button>
    
  </div>
  )
}

export default Routers
