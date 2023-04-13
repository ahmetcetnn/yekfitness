import React from 'react'
import Navbar from '../../Components/Navbar'
import Routers from '../../Components/Routers'
import { options } from '../../Components/Options'
import { useState,useEffect,useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

function Core() {
  const options = {
    method: 'GET',
        headers: {
      'X-RapidAPI-Key': 'aebe601bd9mshd5747766cf04ca7p1db892jsne8b8273941ef',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  const [exerciseList, setExerciseList] = useState([]);
  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises/target/abs', options)
      .then(response => response.json())
      .then(data => setExerciseList(data))
      .catch(err => console.error(err));
      
  }, []);
  const {addMoveToMovelist,watchlist}= useContext(GlobalContext);
  return (
    <>
      <Navbar/>
      <Routers/>
      <div className="container ">

    <div className='container relative mt-8 grid lg:grid-cols-3 lg:gap-7 grid-cols-1 md:items-center  justify-center'>
        {exerciseList.map(exercise => (
          <div className='container relative grid lg:grid-cols-3 lg:gap-7  md:items-center text-white justify-center' key={exercise.id}>
          <h4 className='text-white uppercase'>{exercise.name}</h4>
          <img className='container block opacity-100 transition-all  hover:opacity-30 lg:w-32 w-52 rounded-md   items-center justify-center' src={exercise.gifUrl} alt={exercise.bodyPart}/>
     
     
          <div className='hover:opacity-100 absolute top-1/2 left-1/2 opacity-0 text-center items-center  -translate-x-1/2 -translate-y-1/2'> 
            <button className='text-white w-28 rounded-sm border-solid ml-6 bg-slate-600 whitespace-nowrap opacity-80 'onClick={() => addMoveToMovelist(exercise)}>ADD MOVE </button> 
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Core
