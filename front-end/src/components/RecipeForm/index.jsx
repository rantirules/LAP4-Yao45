import React, { useState } from 'react'
import { IngredientFields, StepFields, UploadImage } from '..'
import "./index.css";

const RecipeForm = (props) => {
  const [name, setName] = useState('')
  const [culture, setCulture] = useState('')
  const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '' }])
  const [steps, setSteps] = useState([{ step: '' }])
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

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

  function postRecipe(validIngredients, validSteps) {
    const user_id = localStorage.getItem('user')
    fetch('http://127.0.0.1:5000/recipes', {
      method: 'POST',
      body: JSON.stringify({
        user_id: user_id,
        name: name,
        culture: culture,
        ingredients: validIngredients,
        steps: validSteps,
        description: description,
        img_url: image
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Recipe couldn\'t be created')
    })
    .then(console.log('Recipe created.'))
    .catch((err) => {
      console.log(err.message)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target.className === "submit-btn") {
      const validIngredients = getValidIngredients()
      const validSteps = getValidSteps()
      if (name.length > 0 && culture.length > 0 && description.length > 0 && validIngredients.length > 0 && validSteps.length > 0 && image !== '') {
        console.log(name, culture, description, validIngredients, validSteps, image)
        postRecipe(validIngredients, validSteps)
        setName('')
        setCulture('')
        setDescription('')
        setIngredients([{ ingredient: '', amount: '' }])
        setSteps([{ step: '' }])
        props.setRecipePosted(true)
      } else {
        console.log("Please enter all fields.")
      }
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
    
    <form className ="recipe-form" onSubmit={handleSubmit}>
      <h2>Add a new recipe:</h2><br/>
      <p>Recipe Name:</p>
      <div>
        <input type="text" value={name} onChange={handleName} required className="form-input"/>
      </div><br/>
      <div>
        <p>Culture/Cuisine:</p>
        <input type="text" value={culture} onChange={handleCulture} required className="form-input"/>
      </div><br/>
      <div>
        <p>Description:</p>
        <input type="text" value={description} onChange={handleDescription} required className="form-input"/>
      </div> <br/>
      <div>
        <IngredientFields ingredients={ingredients} setIngredients={setIngredients} />
      </div> <br/>
      <div>
        <StepFields steps={steps} setSteps={setSteps}/>
      </div> <br/>
      <div>
        {image == '' ? (
          <>
            <p>Upload an image</p>
            
            <UploadImage image={image} setImage={setImage} />
          </>)
          : <p>Image uploaded</p>
        }
      </div> <br/>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Recipe</button>
    </form>
    </>
  )
}

export default RecipeForm