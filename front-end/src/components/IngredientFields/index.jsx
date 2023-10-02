import React from 'react'

const IngredientFields = ({ingredients, setIngredients}) => {

  function handleIngredients(index, event) {
    let data = [...ingredients]
    data[index][event.target.name] = event.target.value
    setIngredients(data)
  }

  function addIngredientField() {
    let newField = { ingredient: '', amount: ''}
    setIngredients([...ingredients, newField])
  }

  function removeFields(index) {
    let data = [...ingredients]
    data.splice(index, 1)
    setIngredients(data)
  }
  return (
    <>
      <p>Ingredients:</p>
      {ingredients.map((input, index) => {
        return (
          <>
            <div key={index} className = "ingredient-box">
             
              <input
                name='ingredient'
                placeholder='Ingredient'
                value={input.ingredient}
                onChange={event => handleIngredients(index, event)}
                className = "ingredient-input"
                />
              <input
                name='amount'
                placeholder='Amount'
                value={input.amount}
                onChange={event => handleIngredients(index, event)}
                className ="ingredient-input"
                />
                
              <button onClick={() => removeFields(index)} className ="remove-btn"
              >Remove</button>
            </div>
          </>
        )
      })}
      <button onClick={addIngredientField} className ="add-btn">Add More</button>
    </>
  )
}

export default IngredientFields