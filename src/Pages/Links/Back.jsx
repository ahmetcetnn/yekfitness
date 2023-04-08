import React from 'react'
import Navbar from '../../Components/Navbar'
import Routers from '../../Components/Routers'
import { useState,useEffect } from 'react'
import { options } from '../../Components/Options'
function Back() {
  const options = {
    method: 'GET',
        headers: {
      'X-RapidAPI-Key': '4873c1c780mshc01834047e55702p1b8219jsnd79dd09da5c9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  const [exerciseList, setExerciseList] = useState([]);
  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises/target/upper%20back', options)
      .then(response => response.json())
      .then(data => setExerciseList(data))
      .catch(err => console.error(err));
      
  }, []);
  return (
    <div>
      <Navbar/>
      <Routers/>
      <div className="container ">

<div className='container mt-8 grid lg:grid-cols-3 lg:gap-7 grid-cols-1 md:items-center  justify-center'>
    {exerciseList.map(exercise => (
      <div className='container grid lg:grid-cols-3 lg:gap-7  md:items-center text-white justify-center' key={exercise.id}>
        <h4 className='text-white uppercase'>{exercise.name}</h4>
        <img className='container lg:w-32 w-28 rounded-md  items-center justify-center' src={exercise.gifUrl} alt={exercise.bodyPart}/>
        </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Back
