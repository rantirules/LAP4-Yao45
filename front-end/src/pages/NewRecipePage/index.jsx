import React from 'react'
import { RecipeForm, ShareRecipe } from '../../components'
import { useState } from 'react'

const NewRecipePage = () => {
  const [recipePosted, setRecipePosted] = useState(false)
  const [recipeShared, setRecipeShared] = useState(false)

  return (
    <>
      { !recipeShared ? (
        recipePosted ?
        <ShareRecipe recipeShared={recipeShared} setRecipeShared={setRecipeShared} /> :
        <RecipeForm recipePosted={recipePosted} setRecipePosted={setRecipePosted} />
        ) : <h2>Recipe Shared!</h2>
      }
    </>
  )
}

export default NewRecipePage