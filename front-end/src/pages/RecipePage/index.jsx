import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Recipe, SaveRecipeButton } from '../../components'

const RecipePage = ({ user_id }) => {
  const [recipe, setRecipe] = useState({})
  const recipe_id = 1 // remove this once id is passed

  useEffect(() => {
    async function loadRecipe() {
      const res = await axios.get(`http://127.0.0.1:5000/recipes/${recipe_id}`)
      const recipe = await res.data.recipe
      // console.log(recipe)
      setRecipe(recipe)
    }
    loadRecipe()
  }, [])
  return (
      // both components must know the recipe id
      // the button must also know the user_id
    <>
      <Recipe rid={recipe.id} name={recipe.name} culture={recipe.culture} desc={recipe.description} img={recipe.img_url} user_id={recipe.user_id} />
      <SaveRecipeButton rid={recipe.id} user_id={user_id} />
    </>

  )
}

export default RecipePage