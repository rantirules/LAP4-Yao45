import React from 'react'

const NewRecipeButton = (props) => {
  function handleSubmit(e) {
    e.preventDefault()
    props.setRecipeShared(false)
    props.setRecipePosted(false)
  }
  return (
    <>
      <h2>Recipe shared!</h2>
      <button onClick={handleSubmit}>New Recipe</button>
    </>
  )
}

export default NewRecipeButton