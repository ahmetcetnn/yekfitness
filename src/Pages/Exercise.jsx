import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'



function Exercise() {
  
  const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  const fetchData = async(url,exerciseOptions) => {
    const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    const data = await response.json();
    const url= "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
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
