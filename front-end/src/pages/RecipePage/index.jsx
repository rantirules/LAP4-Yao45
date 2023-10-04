import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Recipe, SaveRecipeButton } from '../../components'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  const [recipe, setRecipe] = useState({})
  const recipe_id = useParams().id
  const user_id = localStorage.getItem('user')

  useEffect(() => {
    async function loadRecipe() {
      const res = await axios.get(`http://127.0.0.1:5000/recipes/${recipe_id}`)
      const recipe = await res.data.recipe
      // console.log(recipe)
      setRecipe(recipe)
    }
    loadRecipe()
  }, [recipe_id]) // changed this from []
  return (
    // both components must know the recipe id
    // the button must also know the user_id
    <>
    
      <Recipe
      id={recipe.id}
      name={recipe.name}
      culture={recipe.culture}
      desc={recipe.description}
      img={recipe.img_url}
      user_id={recipe.user_id}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
      />
      {/* <Recipe rid={recipe.id} name={recipe.name} culture={recipe.culture} desc={recipe.description} img={recipe.img_url} user_id={recipe.user_id} ingredients={recipe.ingredients} steps={recipe.steps} /> */}
    </>

  )
}

export default RecipePage