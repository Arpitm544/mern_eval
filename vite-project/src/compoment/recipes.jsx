import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Recipes = () => {
    const[getRecipes,setgetRecipes]=useState('')

    useEffect(() => {
      axios.get('http://localhost:8000/recipes/all')
      .then((res)=>{
        setgetRecipes(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
    },[])
    
  return (
    <div>
  {getRecipes.length > 0 ? (
   getRecipes.map((recipes) => (
     <div key={recipes.id}>
       <h1>{recipes.title}</h1>
       <p>{recipes.ingredients}</p>
       <p>{recipes.step}</p>
       <p>{recipes.cookingTime}</p>
     </div>
   ))
  ) : (
   <p>No Recipes found</p>
  )}
    </div>
  )
}

export default Recipes