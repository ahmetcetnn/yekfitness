import React,{useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
function Nutrition() {
  useEffect(() => {
    getMealData()
  },[])
  const getMealData = async () =>{
    const api =await fetch(`https://api.spoonacular.com/recipes/random?apiKey=44940024d3514860b8b98dd1e7393cbc&number=45`)
    const data = await api.json()
    setMealData(data.recipes)
   }

  const [mealData,setMealData] =useState([])
  const [calories,setCalorise]=useState(2000)

 const handleChange = (e) => {
setCalorise(e.target.value)
 }

 
  return (
    <div>
        <Navbar/>
      <div className='container w-60 text-white flex flex-col '>
        <input 
        type='number'
        placeholder="Calorise (e.g 2000)"
        className='w-60 rounded-md mt-4'
        >
          
        </input>
        <button
        className='mt-4 text-center items-center justify-center text-black bg-white rounded-sm border-solid border-white'>Get Daily Meal Plan</button> 
      </div>
      <div className="grid grid-cols-3 gap-4">
      {mealData.map((recipe)=>{
          return(
            <div className='text-white ' key={recipe.id}>
             
              <Link to= {'/recipe/'+recipe.id}>
              <p>{recipe.title}</p> 
              <img src={recipe.image} alt={recipe.title}/>
             
              </Link>
            
            </div>
    
  
          );
        })}
        </div>
   </div>
  )
}

export default Nutrition
