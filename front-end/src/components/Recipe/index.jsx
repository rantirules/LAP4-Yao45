import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Ingredients, Steps } from '..'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";

const Recipe = (props) => {
  const [loading, setLoading] = useState(false)
  const [creator, setCreator] = useState('')
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvu7ysgku'
    }
  })
  const image = cld.image(props.img)
  
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
          <AdvancedImage cldImg={image} width={300} height={150}/>
        </div>
        <div>
          <Ingredients ingredients={props.ingredients}/>
        </div>
        <div>
          <Steps steps={props.steps}/>
        </div>
      </main>
    )
  }

  return loading ? <h2><em>loading...</em></h2> : displayRecipe();
}

export default Recipe