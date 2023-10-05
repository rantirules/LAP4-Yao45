import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Ingredients, Steps, SaveRecipeButton } from '..'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { BsGlobe } from 'react-icons/bs';
import "./index.css"


import { faUser } from '@fortawesome/free-regular-svg-icons';

import { useNavbar } from '../Navbar/NavbarContext';

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

  const { navbarPosition } = useNavbar();


  function displayRecipe() {
    return (
      <main id="main-recipe" className={navbarPosition === 'closed' ? 'closed' : ''}>
        <br/>
        <h1>{props.name}</h1><br/>
        <div id='recipe-img'>
          <AdvancedImage cldImg={image} width={800} height={350}/>
        </div>
        <div className ="content-info">
        <div className ="creator-info">
        
        {/* <FontAwesomeIcon icon="fa-regular fa-user" style={{color: "#ff8080",}} /> */}
        <FontAwesomeIcon icon={faUser} style={{color: '#ff8080'}} />
        {/* <HeartIcon/> */}
          {creator}
        </div>
        <div className ="creator-info">
          <BsGlobe style={{color: '#ff8080'}}/>
          {props.culture}
          
        </div>
        <div className ="creator-info">
          <SaveRecipeButton rid={props.id} uid={props.user_id} />
        </div>
        </div>
        <div id='description-main-recipe'> 
          {/* Description */}
          <p>{props.desc}</p>
        </div>
        
        <div className="ingredients-list">
          <Ingredients ingredients={props.ingredients}/>
        </div>
        <div className="steps-list">
          <Steps steps={props.steps}/>
        </div>
        
      </main>
    )
  }

  return loading ? <h2><em>loading...</em></h2> : displayRecipe();
}

export default Recipe
