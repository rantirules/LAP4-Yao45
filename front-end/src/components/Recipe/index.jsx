import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Recipe = () => {
  const [loading, setLoading] = useState(false)
  const [recipe, setRecipe] = useState({})
  const [creator, setCreator] = useState('')

  useEffect(() => {
    async function loadRecipe() {
      const res = await axios.get("http://127.0.0.1:5000/recipes/1")
      const recipe = await res.data.recipe
      console.log(recipe)
      setRecipe(recipe)
      setLoading(false)

      // get username
      const id = await recipe.user_id
      const resp = await axios.get(`http://127.0.0.1:5000/users/${id}`)
      setCreator(resp.data.user.username)
    }

    loadRecipe()
  }, [])

  function displayRecipe() {
    return (
      <main>
        <h1>{recipe.name}</h1>
        <div>
          Created by: {creator}
        </div>
        <div>
          Culture: {recipe.culture}
        </div>
        <div>
          Description: {recipe.description}
        </div>
        <div>
          Image URL: {recipe.img_url}
        </div>
      </main>
    )
  }

  return loading ? <h2><em>loading...</em></h2> : displayRecipe();
}

export default Recipe