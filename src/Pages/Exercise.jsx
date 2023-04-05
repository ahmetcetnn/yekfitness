import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'



function Exercise() {
  useEffect(() => {
    getExercise()
  },[])
  const getExercise = async () =>{
    const api =await fetch(`https://api.spoonacular.com/recipes/random?apiKey=44940024d3514860b8b98dd1e7393cbc&number=45`)
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
