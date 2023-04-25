import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { options } from '../Components/Options';

function Progess() {
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState([]);

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      .then(response => response.json())
      .then(data => setExerciseList(data))
      .catch(err => console.error(err));
  }, []);

  const handleSelectExercise = (event) => {
    const exerciseId = event.target.value;
    const exercise = exerciseList.find((exercise) => exercise.id === exerciseId);
    setSelectedExercise(exercise);
  };

  const handleSelectWeight = (event) => {
    const weight = event.target.value;
    setSelectedWeight(weight);
  };

  const handleSave = () => {
    
    localStorage.setItem('selectedExercise', JSON.stringify(selectedExercise));
    localStorage.setItem('selectedWeight', selectedWeight);
    alert('Data saved successfully!');
  };

  useEffect(() => {
  
    const savedExercise = JSON.parse(localStorage.getItem('selectedExercise'));
    const savedWeight = localStorage.getItem('selectedWeight');
    if (savedExercise) {
      setSelectedExercise(savedExercise);
    }
    if (savedWeight) {
      setSelectedWeight(savedWeight);
    }
  }, []);

  const [showNewMove, setShowNewMove] = useState(false);
  
  return (
    <>
      <Navbar />
      <div className="container relative mt-8 grid lg:grid-cols-4 lg:gap-7 grid-cols-1 text-center items-center justify-center">
        <div className="container relative grid lg:grid-cols-3 lg:gap-7 items-center text-center md:items-center text-black justify-center">
          <div className="text-center items-center uppercase w-48">
            <p className='text-white text-center uppercase items-center'>Select an exercise</p>
            <select className="text-center items-center uppercase justify-center text-black w-full" onChange={handleSelectExercise} value={selectedExercise?.id || ''}>
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
                  <select className="text-center items-center justify-center text-black uppercase w-48" onChange={handleSelectWeight} value={selectedWeight}>
                    <option className='w-36 text-center items-center' value="5kg">5kg</option>
                    <option className='w-36 text-center items-center' value="7,5kg">7,5kg</option>
                    <option className='w-36 text-center items-center' value="10kg">10kg</option>
                    <option className='w-36 text-center items-center' value="12,5kg">12,5kg</option>
                    <option className='w-36 text-center items-center' value="15kg">15kg</option>
                    <option className='w-36 text-center items-center' value="20kg">20kg</option>
                    <option className='w-36 text-center items-center' value="22,5kg">22,5kg</option>
                    <option className='w-36 text-center items-center' value="25kg">25kg</option>
                    <option className='w-36 text-center items-center' value="30kg">30kg</option>
                    {/* Diğer ağırlık seçenekleri */}
                  </select>
                </div>
                <button className='text-white hover:text-blue-800 w-48 border-solid rounded-md bg-blue-400' onClick={handleSave}>SAVE</button>
               
              </>
              
            )}
          </div>
      
        </div>
         <button className='text-white'>Add New Move</button>
      </div>

      
    </>
  );
}

export default Progess;
