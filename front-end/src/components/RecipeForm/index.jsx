import React, { useState } from 'react'
import { IngredientFields, StepFields } from '..'

const RecipeForm = () => {
  const [name, setName] = useState('')
  const [culture, setCulture] = useState('')
  const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '' }])
  const [steps, setSteps] = useState([{ step: '' }])
  const [description, setDescription] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }

  function handleCulture(e) {
    setCulture(e.target.value)
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
      const validIngredients = getValidIngredients()
      const validSteps = getValidSteps()
      // if (name.length > 0 && culture.length > 0 && description.length > 0)
      console.log(name, culture, description, validIngredients, validSteps)
      // console.log(e.target)
      setName('')
      setCulture('')
      setDescription('')
      setIngredients([{ ingredient: '', amount: '' }])
      setSteps([{ step: '' }])
    }
  }

  function getValidIngredients() {
    let validIngredients = []
    ingredients.forEach((i) => {
      if (i.ingredient.length > 0 && i.amount.length > 0) {
        validIngredients.push(i)
      }
    })
    return validIngredients
  }

  function getValidSteps() {
    let validSteps = []
    steps.forEach((i) => {
      if (i.step.length > 0) {
        validSteps.push(i)
      }
    })
    return validSteps
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
        <IngredientFields ingredients={ingredients} setIngredients={setIngredients}/>
      </div>
      <div>
        <StepFields steps={steps} setSteps={setSteps}/>
      </div>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Recipe</button>
    </form>
    </>
  )
}

export default RecipeForm