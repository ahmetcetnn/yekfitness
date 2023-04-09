import React from 'react'
import { useContext } from 'react'
import { GlobalContext} from '../Context/GlobalContext'
import Navbar from '../Components/Navbar'

function Schedule() {
    const {watchlist,removeMoveFromMovelist} =useContext(GlobalContext)
    const handleRemoveMovieFromWatchlist = (id) => {
        removeMoveFromMovelist(id);
    }
  




  return (
    <div>
<Navbar/>
<div className='container relative mt-8 grid lg:grid-cols-5 lg:gap-4 grid-cols-1 md:items-center  justify-center'>
        {watchlist.map((exercise) => (
        <div className='container relative grid lg:grid-cols-3 lg:gap-7  md:items-center text-white justify-center' key={exercise.id}>
        <h4 className='text-white uppercase'>{exercise.name}</h4>
        <img className='container block opacity-100 transition-all  hover:opacity-30 lg:w-32 w-52 rounded-md   items-center justify-center' src={exercise.gifUrl} alt={exercise.bodyPart}/>
   
   
        <div className='hover:opacity-100 absolute top-1/2 left-1/2 opacity-0 text-center items-center transform -translate-x-1/2 -translate-y-1/2'> 
          <button className='text-white w-32 rounded-sm border-solid  bg-slate-600 whitespace-nowrap opacity-80 'onClick={() => handleRemoveMovieFromWatchlist(exercise.id)}>Remove Move </button> 
          </div>
        </div>
      ))}
      </div>
      
      </div>
 
  );
}


export default Schedule
