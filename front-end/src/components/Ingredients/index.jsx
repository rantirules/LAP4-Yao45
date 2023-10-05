import React from 'react'

const Ingredients = ({ ingredients }) => {

  function displayIngredients() {
    if (ingredients) {
      let list = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient.amount} {ingredient.ingredient}</li>
      })
      return list
    }
  }

  return (
    <>
      <strong style={{fontSize:'22px', color:'#FF8080'}}>Ingredients:</strong>
        <ol>
         {displayIngredients()}
        </ol>
    </>
  )
}

export default Ingredients
