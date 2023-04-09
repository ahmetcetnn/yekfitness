import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';





function Recipe() {
  let params = useParams();
  const [details,setDetails]=useState({});
  const [activeTab,setActiveTab]=useState("Instructions")


    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=44940024d3514860b8b98dd1e7393cbc`)
      const detailData = await data.json();
      setDetails(detailData)
    }

 
useEffect(()=>{
  fetchDetails()
},[params.name])


return ( <div className='text-white'>
    <Navbar/>
    
      <div className='text-white container items-center flex flex-col '>
        <h2>{details.title}</h2>
        <img className='w-128 rounded-md items-center justify-center ' src={details.image} alt=""/>
      
      <div className='px-10 flex flex-col'>
      <button
        className={`py-2  justify-center items-center w-40 rounded-lg ${activeTab === "Instructions" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
        onClick={() => setActiveTab("Instructions")}
        >
         Instructions
      </button>
      <button
        className={`py-2  rounded-lg w-40 ${activeTab === "Ingredients" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
        onClick={() => setActiveTab("Ingredients")}
        >
         Ingredients
      </button>
     
     
        {activeTab === "Instructions" && (
                <div className='text-center items-center w-5/6 bg-red-900'>   
                    <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                </div> 
        )}


        {activeTab === "Ingredients" && (
            <ul className='text-center'>
            {details.extendedIngredients.map((ingredient)=> (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
    )}
    </div>
    </div>
      
  </div>
)} 

export default Recipe
