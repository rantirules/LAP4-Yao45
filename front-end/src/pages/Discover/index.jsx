import React, { useState, useEffect }, {useState} from 'react'
import './index.css'

import {Post}  from '../../components'
import SearchBar from '../../components/Search/SearchBar'


const Discover = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://127.0.0.1:5000/posts')
      const data = await response.json()
      setPosts(data.posts)
    }
    getPosts()
  }, [])

  
  return (

    <div>
      <h1>DISCOVER</h1>
      <div className="discover">
        {posts && posts.map((p, idx) => {
          return <Post key={idx} id={p.id} username={p.user_id} recipePicture={p.img_url} recipeDescription={p.description} recipeName={p.recipe_id} personalDescription={p.story} timeStamp={p.time_posted} />
        })}
      </div>
     
    </div>
  )
}

export default Discover

