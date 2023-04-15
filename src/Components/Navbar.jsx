import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  
  const navigate =useNavigate()
  const handleExit = () => {
    
    localStorage.removeItem('user');
   
    navigate('/login');}

  return (
    // Header Section
    <>
    <header className="bg-black py-3 pl-10 lg:py-6 text-gray-400 font-serif uppercase">
      {/* Header Container */}
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16 ">
      {/* LOGO */}
      <h1 className=" lg:text-4xl text-3x1 font-bold text-gray-400 text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-slate-200"><Link to="/">yekFit </Link></h1>
     
      {/* Navigation */}
      <nav className="flex justify-between flex-1">
        {/* MENU */}
        <div className="hidden md:flex py-6 items-start text-xs lg:text-base space-x-4 lg:space-x-8">
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to="/exercise">exercise </Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to ="/nutrition">nutrition </Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to="/progress">Progress</Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to ="/schedule">Schedule</Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100" onClick={handleExit}>EXIT</a>
          <form>
          

        </form>
        </div>
        {/* Login Area */}
        <div className="flex items-center space-x-4 lg:space-x-8">
        {/* Search Area */}
        
        {/* Signup Area */}
        <div className="hidden md:text-xs md:flex items-center space-x-4 lg:space-x-8 lg:text-base">
         <Link to="/login"> <a className="cursor-pointer md:text-sm">Login</a></Link>
         <Link to="/register" ><a className="bg-red-600 px-3 py-1 hover:bg-rose-600 hover:text-gray-600 cursor-pointer transition duration-100 rounded-sm whitespace-nowrap">Sign Up</a></Link>
        </div>
        </div>
      </nav>
       {/* Mobile Menu */}
       <div className="block md:hidden mr-14">
        <div  className="space-y-1 cursor-pointer">
          <div className="bg-slate-500 w-8 h-1 rounded-full"></div>
          <div className="bg-slate-500 w-8 h-1 rounded-full"></div>
          <div className="bg-slate-500 w-8 h-1 rounded-full"></div>
        </div>
      </div>
    </div>
    



    </header>
   
   




    </>
  );
}

export default Navbar;
