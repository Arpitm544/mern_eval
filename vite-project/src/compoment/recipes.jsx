import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Recipes = () => {
    const [getRecipes, setgetRecipes] = useState([])
    const { id } = useParams()

    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get(
            id 
              ? `http://localhost:8000/recipes/${id}` 
              : 'http://localhost:8000/recipes/all'
          )
          setgetRecipes(response.data.data)
        } catch (err) {
          console.error(err)
        }
      }
      fetchRecipes()
    }, [id])
    
    return (
      <div>
        {getRecipes.length > 0 ? (
          getRecipes.map((recipe) => (
            <div key={recipe.id}>
              <h1>{recipe.title}</h1>
              <p>{recipe.ingredients}</p>
              <p>{recipe.steps}</p>
              <p>{recipe.cookingTime}</p>
            </div>
          ))
        ) : (
          <p>No Recipes found</p>
        )}
      </div>
    )
}

export default Recipes