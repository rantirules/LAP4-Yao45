import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Recipe = (props) => {
  const [loading, setLoading] = useState(false)
  const [creator, setCreator] = useState('')

  useEffect(() => {
    setLoading(true)
    async function loadUser() {
      // get username
      if (props.user_id) {
        const id = await props.user_id
        const resp = await axios.get(`http://127.0.0.1:5000/users/${id}`)
        setCreator(resp.data.user.username)
        setLoading(false)
      }
    }
    loadUser()
  }, [props.user_id])

  function displayIngredients() {
    const ingredients = props.ingredients
    if (ingredients) {
      let list = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
      })
      return list
    }
  }

  function displayRecipe() {
    return (
      <main>
        <h1>{props.name}</h1>
        <div>
          Created by: {creator}
        </div>
        <div>
          Culture: {props.culture}
        </div>
        <div>
          Description: {props.desc}
        </div>
        <div>
          Image URL: {props.img}
        </div>
        <div>
          Ingredients:
          <ol>
            {displayIngredients()}
          </ol>
        </div>
      </main>
    )
  }

  return loading ? <h2><em>loading...</em></h2> : displayRecipe();
}

export default Recipe