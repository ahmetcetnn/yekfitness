import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'



function Exercise() {
 const fetchData = async(url,options)=> {
  const response =await fetch(url,options);
  const data=await response.json();
  return data;
}
  

  
 



  return (
    <>
    <Navbar/>
    <div className='container grid-cols-3'>
      <h1> naber </h1>
    </div>
      
    </>
  )
}

export default Exercise
