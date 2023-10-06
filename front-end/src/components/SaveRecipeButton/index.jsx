import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import "HeartIcon" from ".."
import axios from 'axios'

const SaveRecipeButton = (props) => {
  const [message, setMessage] = useState('')
  const [isSaved, setIsSaved] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const uid = localStorage.getItem('user')
  const url = `http://127.0.0.1:5000/saved/${uid}/${props.rid}`

  const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      if (!isSaved && !isAdded) {
        setIsHovered(true);
      }
      // setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      if (!isSaved && !isAdded) {
        setIsHovered(false);
      }
      setIsHovered(true);
    };

  async function saveRecipe() {
    const res = await axios.post(url)
    if (res.data.error) {
      console.log("Recipe already saved")
      setIsSaved(true);
      // setMessage('Recipe is already saved.')
    } else if (res.status === 201) {
      setIsSaved(true);
      setIsAdded(true);
      console.log("Recipe saved.")
      // setMessage("Recipe saved.")
    }
    setTimeout(() => {
      setMessage('')
    }, 3000)
    // timeout will disappear after 3 seconds even if pressed again
  }

  return (
    <>
     
      <button onClick={saveRecipe} className ="save-button" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onMouseClick={handleMouseEnter}
      disabled={isSaved}
      >
      <FontAwesomeIcon
      
      icon={isSaved ? solidHeart : (isHovered ? solidHeart : regularHeart)}
        style={{ color: "#ff8080" }}
      />
        {isAdded ? 'Saved!' : 'Save'}
        </button><br/>
      <p>{message}</p>
    </>
  )
}

export default SaveRecipeButton
