import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'



function Exercise() {
  const [exerciseList, setExerciseList] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4873c1c780mshc01834047e55702p1b8219jsnd79dd09da5c9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      .then(response => response.json())
      .then(data => setExerciseList(data))
      .catch(err => console.error(err));
      
  }, []);

  return (
    <>
    <Navbar/>
    <div className='flex flex-row gap-4 w-full'>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Shoulder</button>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Arms</button>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Chest</button>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Back</button>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Legs</button>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Core</button>
      <button className='w-48 rounded-md h-5 text-black bg-cyan-600'>Cardio</button>
    </div>
    <div className="container ">

    <div className='container grid lg:grid-cols-3 lg:gap-7 grid-cols-1 md:items-center  justify-center'>
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
