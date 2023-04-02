import React,{useState} from 'react'
import Navbar from '../Components/Navbar'

function Nutrition() {

  const [mealData,setMealData] =useState(null)
  const [calories,setCalorise]=useState(2000)

 const handleChange = (e) => {
setCalorise(e.target.value)
 }
 const getMealData = () =>{

 } 
 const getRecipes = async () =>{
    
  const api =  await fetch (`https://api.spoonacular.com/recipes/findByNutrients?maxCarbs=50?apiKey=3311761e9882409381dfbb8ca1e01378&number=3`)
  const data = await api.json();
  setPopular(data.recipes)

} 
  return (
    <>
    <div>
        <Navbar/>
      <div className='container w-60 text-black flex flex-col'>
        <input 
        type='number'
        placeholder="Calorise (e.g 2000)"
        className='w-60 rounded-md mt-4'
        >
          
        </input>
        <button
        className='mt-4 text-center items-center justify-center text-black bg-white rounded-sm border-solid border-white'>Get Daily Meal Plan</button> 
      </div>

      
   </div>
   </>
  )
}

export default Nutrition
