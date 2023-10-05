import React from 'react'
import { RecipeForm, ShareRecipe, NewRecipeButton } from '../../components'
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
        ) : <NewRecipeButton setRecipePosted={setRecipePosted} setRecipeShared={setRecipeShared} />
      }
    </>
  )
}

export default NewRecipePage
