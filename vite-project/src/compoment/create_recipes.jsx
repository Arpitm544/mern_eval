import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import axios from 'axios'
const Create_recipes = () => {
    const [title,setTitle]=useState('')
    const[ingredients,setIngredients]=useState('')
    const[steps,setSteps]=useState('')
    const[cookingTime,setCookingTime]=useState('')
   const navigate=useNavigate()
    const handleRecipes=async(e)=>{
        e.preventDefault();

        try {
          const response= await axios.post("http://localhost:8000/recipes/add", {
            title,ingredients,steps,cookingTime
          });
          if(!title||!ingredients||!steps||!cookingTime)
            {
               alert('Fill the require filled')
            }
            else if (response.data.success) {
                alert("Added succesfully!");
                navigate('/recipes/all')
              } else {
                alert(response.data.message || "Login failed");
              }
        } catch (error) {
          console.error(error);
          alert("Something went wrong. Try again.");
        }
    };

  return (
    <div>
        <form>
            <input type='String' placeholder='Enter the titel' onChange={(e)=>setTitle(e.target.value)}/>
            <input type='String' placeholder='Enter the ingredients' onChange={(e)=>setIngredients(e.target.value)}/>
            <input type='String' placeholder='Enter the Steps' onChange={(e)=>setSteps(e.target.value)}/>
            <input type='Number' placeholder='Enter the CookingTime' onChange={(e)=>setCookingTime(e.target.value)}/>
        </form>
        <button onClick={handleRecipes}>Add Recipes</button>
    </div>
  )
}

export default Create_recipes