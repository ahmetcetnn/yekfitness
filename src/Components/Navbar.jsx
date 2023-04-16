import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiDumbbell } from 'react-icons/bi';
function Navbar() {
  
  const navigate =useNavigate()

    const handleExit = () => {
      localStorage.removeItem('user');
      navigate('/login');}
      
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // Header Section
    <>
    <header className="bg-black py-3 pl-10 lg:py-6 text-gray-400 font-serif ">
      {/* Header Container */}
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16 ">
      {/* LOGO */}
      <h1 className=" lg:text-4xl text-3x1 font-bold text-gray-400 text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-slate-200"><Link to="/">YEKFIT </Link></h1>
     
      {/* Navigation */}
      <nav className="flex justify-between flex-1">
        {/* MENU */}
        <div className="hidden md:flex py-6 items-start text-xs lg:text-base space-x-4 lg:space-x-8">
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to="/exercise">EXERCISE </Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to ="/nutrition">NUTRITION </Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to="/progress">PROGRESS</Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100"><Link to ="/schedule">SCHEDULE</Link></a>
          <a className="hover:text-blue-600 hover:cursor-pointer transition duration-100" onClick={handleExit}>EXIT</a>
          <form>
          

        </form>
        </div>
        {/* Login Area */}
        <div className="flex items-center space-x-4 lg:space-x-8">
        {/* Search Area */}
        
        {/* Signup Area */}
        <div className="hidden md:text-xs md:flex items-center space-x-4 lg:space-x-8 lg:text-base">
         <Link to="/login"> <a className="cursor-pointer md:text-sm">LOGIN</a></Link>
         <Link to="/register" ><a className="bg-red-600 px-3 py-1 hover:bg-rose-600 hover:text-gray-600 cursor-pointer transition duration-100 rounded-sm whitespace-nowrap">SIGN UP</a></Link>
        </div>
        </div>
      </nav>
       {/* Mobile Menu */}
        <div className="lg:hidden ">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-slate-900 transition-shadow z-50 flex flex-col  justify-center ">
            <BiDumbbell fontSize={27} className="absolute top-4 right-5" onClick={() => setToggleMenu(false)} />
            <ul className="text-center text-stone-400  text-3xl flex flex-col justify-center items-center">
              <li><a href="/exercise" onClick={() => setToggleMenu(false)}>Exercise</a></li>
              <li><a href="/nutrition" onClick={() => setToggleMenu(false)}>Nutrition</a></li>
              <li><a href="/progress" onClick={() => setToggleMenu(false)}>Progress</a></li>
              <li><a href="/schedule" onClick={() => setToggleMenu(false)}>Schedule</a></li>
              <li><a href="/exit" onClick={() => setToggleMenu(false)}>Exit</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
    



    </header>
   
   




    </>
  );
}

export default Navbar;
