import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'
import Routers from '../Components/Routers';
import { options } from '../Components/Options';
function Exercise() {

  const [exerciseList, setExerciseList] = useState([]);
  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      .then(response => response.json())
      .then(data => setExerciseList(data))
      .catch(err => console.error(err));
      
  }, []);

  return (
    <>
    <Navbar/>
    <Routers/>
    <div className="container ">

    <div className='container mt-8 grid lg:grid-cols-3 lg:gap-7 grid-cols-1 md:items-center  justify-center'>
        {exerciseList.map(exercise => (
          <div className='container grid lg:grid-cols-3 lg:gap-7  md:items-center text-white justify-center' key={exercise.id}>
            <h4 className='text-white uppercase'>{exercise.name}</h4>
            <img className='container lg:w-32 w-20 rounded-md  items-center justify-center' src={exercise.gifUrl} alt={exercise.bodyPart}/>
            
            </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default Exercise
