import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'



function Exercise() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e9c142f000msh2a8e878a6fa6dcdp142d29jsn185cfccec5c4',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

  useEffect(() => {
    getExercise()
  },[])
  const getExercise = async () =>{
    const api =await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
    const data = await api.json()
    console.log(data)
   }
   const [exerciseData,setExerciseData] =useState([])

   
 



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
