import React, { useRef, useState } from 'react'
import axios from 'axios'

const ShareRecipe = () => {
  const [description, setDescription] = useState('')
  const [story, setStory] = useState('')
  const [recipe, setRecipe] = useState()
  const recipeRef = useRef(recipe)
  
  async function getRecipe() {
    const res = await axios.get('http://127.0.0.1:5000/last_recipe')
    console.log(res.data)
    recipeRef.current = res.data.recipe
    console.log(recipeRef.current)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleStory(e) {
    setStory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getRecipe()
    if (description.length > 0 && story.length > 0) {
      postPost()
      setStory('')
      setDescription('')
    } else {
      console.log("Please enter all fields")
    }
  }

  function postPost() {
    const user_id = localStorage.getItem('user')
    fetch(`http://127.0.0.1:5000/posts`, {
      method: 'POST',
      body: JSON. stringify({
        user_id: user_id,
        recipe_id: recipeRef.current.id,
        description: description,
        story: story,
        img_url: recipeRef.current.img_url
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Post couldn\'t be created')
    })
    .then(console.log('Post created.'))
    .catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <form className='recipe-form' onSubmit={handleSubmit}>
      <h2>Share Recipe</h2>
      <div>
        <p>Brief description:</p>
        <input type="text" value={description} onChange={handleDescription} required className="form-input"/>
      </div><br/>
      <div>
        <p>Brief story:</p>
        <input type="text" value={story} onChange={handleStory} required className="form-input"/>
      </div><br/>
      <button type="submit" onClick={handleSubmit}>Share</button>
    </form>
  )
}

export default ShareRecipe