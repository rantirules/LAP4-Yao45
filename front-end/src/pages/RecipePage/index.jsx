import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Recipe, SaveRecipeButton } from '../../components'

const RecipePage = () => {
  return (
    <>
      <Recipe />
      <SaveRecipeButton />
    </>

  )
}

export default RecipePage