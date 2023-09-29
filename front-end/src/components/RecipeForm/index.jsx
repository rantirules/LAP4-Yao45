import React, { useState } from 'react'
import IngredientFields from '../IngredientFields'

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
        <IngredientFields ingredients={ingredients} setIngredients={setIngredients}/>
      </div>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Recipe</button>
    </form>
    </>
  )
}

export default RecipeForm