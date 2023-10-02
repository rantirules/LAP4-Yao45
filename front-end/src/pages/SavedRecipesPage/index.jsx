import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const SavedRecipesPage = () => {
  const user_id = 4
  const [recipeList, setRecipeList] = useState([]) // { id: '', name: '' }
  const [loading, setLoading] = useState(false)
  const recipeRef = useRef(recipeList)

  useEffect(() => {
    async function getSavedRecipes() {
      const res = await axios.get(`http://127.0.0.1:5000/saved/${user_id}`)
      console.log(res.data.saved_recipes)
      const recipes = await res.data.saved_recipes // name, id
      setRecipeList(recipes)
      recipeRef.current = recipes
      console.log(recipeRef.current)

      if (recipes) {
        let list = recipes.map((recipe, index) => {
          return <li key={index}>{recipe.name} {recipe.id}</li>
        })
        recipeRef.current = list
      }
      
      console.log(recipeRef.current)
    }
    getSavedRecipes()
  }, [])

  return (
    <>
      <h2>Saved Recipes</h2>
      <ul>{recipeRef.current}</ul>
    </>
  )
}

export default SavedRecipesPage