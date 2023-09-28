import React from 'react'
import './index.css'

import {Post}  from '../../components'

const Discover = () => {
  return (

    <div>
      <h1>Welcome to discover page</h1>
      <div className="discover">
      <Post
        username={'Charlie'}
        profileIcon='💀'
        recipePicture='https://hips.hearstapps.com/hmg-prod/images/190130-korean-fried-chicken-horizontal-041-1549304734.jpg?crop=0.888888888888889xw:1xh;center,top'
        recipeLink='https://www.joshuaweissman.com/post/korean-fried-chicken'
        recipeName='Korean Fried Chicken'
        recipeDescription='The best fried chicken in asia'
        personalDescription='My grandmother would cook this for us every day. It helped me connect to my roots after being born in America'
        />
      </div>
    </div>
  )
}

export default Discover

