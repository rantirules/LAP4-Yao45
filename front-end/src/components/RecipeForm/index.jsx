import React, { useState } from 'react'

const RecipeForm = () => {
  const [name, setName] = useState('')
  const [culture, setCulture] = useState('')
  // const [ingredients, setIngredients] = useState([{ingredient: ''}])
  // const [steps, setSteps] = useState([])
  const [description, setDescription] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }

  function handleCulture(e) {
    setCulture(e.target.value)
  }
  
  // function handleIngredients(e) {
  //   setIngredients(prev => [...prev, e.target.value])
  // }

  // function handleName(e) {
  //   setName(e.target.value)
  // }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, culture, description)
  }

  return (
    <form action="">
      <p>Recipe Name:</p>
      <div>
        <input type="text" value={name} onChange={handleName}/>
      </div>
      <div>
        <p>Culture/Cuisine:</p>
        <input type="text" value={culture} onChange={handleCulture}/>
      </div>
      <div>
        <p>Description:</p>
        <input type="text" value={description} onChange={handleDescription}/>
      </div>
      {/* <div>
        <p>Ingredients:</p>
        {ingredients.map((input, index) => {
          return (
            <div key={index}>
              <input

                placeholder='Ingredient'
                value={input.}
              />
            </div>
          )
        })}
        <input type="text" value={ingredients} onChange={handleIngredients}/>
      </div> */}
      <button type="submit" onClick={handleSubmit}>Submit Recipe</button>
    </form>
  )
}

export default RecipeForm