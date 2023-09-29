import React from 'react'

const Ingredients = ({ ingredients }) => {

  function displayIngredients() {
    if (ingredients) {
      let list = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
      })
      return list
    }
  }

  return (
    <>
      Ingredients:
        <ol>
         {displayIngredients()}
        </ol>
    </>
  )
}

export default Ingredients