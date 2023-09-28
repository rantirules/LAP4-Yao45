import React, { useState } from 'react'
import axios from 'axios'

const SaveRecipeButton = (props) => {
  const [message, setMessage] = useState('')
  const url = `http://127.0.0.1:5000/saved/${props.uid}/${props.rid}`

  async function saveRecipe() {
    const res = await axios.post(url)
    if (res.data.error) {
      console.log("Recipe already saved")
      setMessage('Recipe is already saved.')
    } else if (res.status === 201) {
      console.log("Recipe saved.")
      setMessage("Recipe saved.")
    }
    setTimeout(() => {
      setMessage('')
    }, 3000)
    // timeout will disappear after 3 seconds even if pressed again
  }

  return (
    <>
      <button onClick={saveRecipe}>Save Recipe</button>
      <p>{message}</p>
    </>
  )
}

export default SaveRecipeButton