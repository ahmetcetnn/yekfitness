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
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSelectExercise = (event) => {
    const exerciseId = event.target.value;
    const exercise = exerciseList.find((exercise) => exercise.id === exerciseId);
    setSelectedExercise(exercise);
  };

  return (
    <>
    <Navbar/>
    <div className="container relative mt-8 grid lg:grid-cols-3 lg:gap-7 grid-cols-1 md:items-center justify-center">
      <div className="container relative grid lg:grid-cols-3 lg:gap-7 items-center text-center md:items-center text-black justify-center">
        <select className="text-center items-center justify-center text-black uppercase w-48" onChange={handleSelectExercise}>
          <option className='w-36 text-center items-center' value="">Add an exercise</option>
          {exerciseList.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.name}
            </option>
          ))}
        </select>

        {selectedExercise && (
          <>
            <img className="container block opacity-100 transition-all  hover:opacity-30 lg:w-32 w-52 rounded-md   items-center justify-center" src={selectedExercise.gifUrl} alt={selectedExercise.bodyPart} />
            <div>{/* Burada ağırlık takibi için gerekli olan bileşenleri ekleyebilirsiniz */}</div>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default Progess
<