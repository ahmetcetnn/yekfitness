import React from 'react'
import Navbar from '../Components/Navbar'
import { useEffect,useState } from 'react';
import { options } from '../Components/Options';


function Progess() {
  const [exerciseList, setExerciseList] = useState([]);
  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      .then(response => response.json())
      .then(data => setExerciseList(data))
      .catch(err => console.error(err));
      
  }, []);
  const [selectedExercise, setSelectedExercise] = useState([]);

  const handleSelectExercise = (event) => {
    const exerciseId = event.target.value;
    const exercise = exerciseList.find((exercise) => exercise.id === exerciseId);
    setSelectedExercise(exercise);
  };

  return (
    <>
    <Navbar/>
    <div className="container relative mt-8 grid lg:grid-cols-3 lg:gap-7 grid-cols-1 text-center items-center justify-center">
  <div className="container relative grid lg:grid-cols-3 lg:gap-7 items-center text-center md:items-center text-black justify-center">
    <div className="text-center items-center uppercase w-48">
      <p className='text-white text-center uppercase items-center'>Select an exercise</p>
      <select className="text-center items-center justify-center text-black w-full" onChange={handleSelectExercise}>
        <option className='text-center items-center text-white uppercase' value="">Select </option>
        {exerciseList.map((exercise) => (
          <option className='uppercase' key={exercise.id} value={exercise.id}>
            {exercise.name}
          </option>
        ))}
      </select>
      {selectedExercise && (
        <>
          <img className="container block opacity-100 transition-all  hover:opacity-30 lg:w-32 w-52 rounded-md items-center justify-center" src={selectedExercise.gifUrl} alt={selectedExercise.bodyPart} />
          <div>
            <select className="text-center items-center justify-center text-black uppercase w-48">
              <option className='w-36 text-center items-center' value="">Select weight</option>
              <option className='w-36 text-center items-center' value="5kg">5kg</option>
              <option className='w-36 text-center items-center' value="8kg">8kg</option>
              <option className='w-36 text-center items-center' value="10kg">10kg</option>
              <option className='w-36 text-center items-center' value="12,5kg">12,5kg</option>
              <option className='w-36 text-center items-center' value="15kg">15kg</option>
              <option className='w-36 text-center items-center' value="17,5kg">17,5kg</option>
              <option className='w-36 text-center items-center' value="20kg">20kg</option>
              <option className='w-36 text-center items-center' value="22,5kg">22,5kg</option>
              <option className='w-36 text-center items-center' value="25kg">25kg</option>
              <option className='w-36 text-center items-center' value="30kg">30kg</option>
              <option className='w-36 text-center items-center' value="35kg">35kg</option>
              <option className='w-36 text-center items-center' value="40kg">40kg</option>
              <option className='w-36 text-center items-center' value="45kg">45kg</option>
              <option className='w-36 text-center items-center' value="50kg">50kg</option>
              <option className='w-36 text-center items-center' value="55kg">55kg</option>
              <option className='w-36 text-center items-center' value="60kg">60kg</option>
              <option className='w-36 text-center items-center' value="65kg">65kg</option>
            </select>
          </div>
        </>
      )}
    </div>
  </div>
</div>
</> )}
export default Progess
