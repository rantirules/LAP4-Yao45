import React, { useState, useEffect } from 'react'
import './index.css'

import {Post}  from '../../components'
import SearchBar from '../../components/Search/SearchBar'

import { useNavbar } from '../../components/Navbar/NavbarContext';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useNavigate } from 'react-router-dom';






const Discover = () => {

  const { navbarPosition } = useNavbar();

  const navigate = useNavigate();



  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://127.0.0.1:5000/posts')
      const data = await response.json()
      setPosts(data.posts)
    }
    getPosts()
  }, [])

  const handleAddRecipeClick = () => {
    navigate('/new-recipe')
  }
  
  return (
  
    <div id='discover-page' className={navbarPosition === 'closed' ? 'closed' : ''}>
      <div id='title'>
        <h1>Discover the Magic</h1>
      </div>
      
      <div className="discover">
        {posts && posts.map((p, idx) => {
          return <Post key={idx} id={p.id} userId={p.user_id} recipePicture={p.img_url} recipeDescription={p.description} recipeId={p.recipe_id} personalDescription={p.story} timeStamp={p.time_posted} />
        })}
      </div>

      <div id='new-recipe-button'>
      <button 
            className='mui-btn'
            onClick={handleAddRecipeClick}> 
              <AddCircleOutlineIcon/> 
              <p className='add-recipe'>Add your own recipe</p>
          </button>
      </div>
     
    </div>
  )
}

export default Discover

