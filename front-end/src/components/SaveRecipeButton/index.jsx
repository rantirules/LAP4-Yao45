import React from 'react'
import axios from 'axios'

const SaveRecipeButton = (props) => {
  const url = `http://127.0.0.1:5000/saved/${props.uid}/${props.rid}`

  async function saveRecipe() {
    const res = await axios.post(url)
    if (res.data.error) {
      console.log("Recipe already saved")
    } else if (res.status === 201) {
      console.log("Recipe saved")
    }
  }

  return (
    <button onClick={saveRecipe}>Save Recipe</button>
  )
}

export default SaveRecipeButton