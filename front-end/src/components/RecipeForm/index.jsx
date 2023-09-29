import React, { useState } from 'react'

const RecipeForm = () => {
  const [name, setName] = useState('')
  const [culture, setCulture] = useState('')
  const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '' }])
  // const [steps, setSteps] = useState([])
  const [description, setDescription] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }

  function handleCulture(e) {
    setCulture(e.target.value)
  }
  
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

  // function handleName(e) {
  //   setName(e.target.value)
  // }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target.className === "submit-btn") {

      console.log(name, culture, description, ingredients)
      // console.log(e.target)
      setName('')
      setCulture('')
      setDescription('')
      setIngredients([{ ingredient: '', amount: '' }])
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>Recipe Name:</p>
      <div>
        <input type="text" value={name} onChange={handleName} required/>
      </div>
      <div>
        <p>Culture/Cuisine:</p>
        <input type="text" value={culture} onChange={handleCulture} required/>
      </div>
      <div>
        <p>Description:</p>
        <input type="text" value={description} onChange={handleDescription} required/>
      </div>
      <div>
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
      </div>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Recipe</button>
    </form>
    </>
  )
}

export default RecipeForm