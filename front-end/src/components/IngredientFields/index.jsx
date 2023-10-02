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
            <div key={index}>
              <input
                name='ingredient'
                placeholder='Ingredient'
                value={input.ingredient}
                onChange={event => handleIngredients(index, event)}
                />
              <input
                name='amount'
                placeholder='Amount'
                value={input.amount}
                onChange={event => handleIngredients(index, event)}
                />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          </>
        )
      })}
      <button onClick={addIngredientField}>Add More</button>
    </>
  )
}

export default IngredientFields