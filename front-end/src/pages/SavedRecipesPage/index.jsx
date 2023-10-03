import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SavedRecipesPage = () => {
  const user_id = localStorage.getItem('user')
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
          return (
            <li key={index}>
              {recipe.name} {recipe.id}
              <Link className='saved-link' to={`/recipe/${recipe.id}`}>View</Link>
            </li>
          )
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