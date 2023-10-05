import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKitchenSet, faEarthAfrica, faLink} from '@fortawesome/free-solid-svg-icons'
import CommentModal from '../CommentModal'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Link } from 'react-router-dom';

import { useAuth } from '../Auth/AuthContext';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import CommentSection from '../CommentSection/CommentSection'
import './index-2.css'
import axios from 'axios'

const Post = (props) => {
    const { isLoggedIn, login, logout, userName, displayName } = useAuth();
    const [isOpen, setIsOpen] = useState(false)
    const [comments, setComments] = useState([])
    const [username, setUsername] = useState('')
    const [recipeName, setRecipeName] = useState('')
    const [culture, setCulture] = useState('')

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dvu7ysgku'
        }
      })
    const image = cld.image(props.recipePicture)

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`http://127.0.0.1:5000/posts/${props.id}/comments`)
            const data = await response.json()
            setComments(data.comments)
        }
        async function getUsername() {
            const res = await axios.get(`http://127.0.0.1:5000/users/${props.userId}`)
            const username = await res.data.user.username
            setUsername(username)
        }
    
        async function getRecipe() {
            const res = await axios.get(`http://127.0.0.1:5000/recipes/${props.recipeId}`)
            const recipeName = await res.data.recipe.name
            const culture = await res.data.recipe.culture
            setRecipeName(recipeName)
            setCulture(culture)
        }
        getComments()
        getRecipe()
        getUsername()
    }, [])



    const showComments = (e) => {
        e.preventDefault()
        // console.log('COMMENTS SHOWING')
        setIsOpen(!isOpen)
        console.log(isOpen);
    }



  return (
    <div id='indiv-post-cont'>    
    <div className='postContainer2'>
        <div className="left-panel2">
            <div className="user2">
                <div id='user-icon-posts'><AccountCircleOutlinedIcon id='usericon'/></div>
                <h3>{username}</h3>
            </div>
            <div className="recipe2">
                {recipeName}
            </div>
            {/* <div className="links2"> */}
                {/* <div className="link2">
                    <FontAwesomeIcon icon={faUser}/>
                </div> */}
                
                <div className="link2">
                        <FontAwesomeIcon icon={faEarthAfrica}/>
                        <p> {culture} </p>
                </div>

                <Link to={`/recipe/${props.id}`} className="link2">
                    <FontAwesomeIcon icon={faLink} />
                    <p id='view-recipe'>View Recipe</p>
                </Link>
            {/* </div> */}

            <div id='commet-link'>
                <a className="cmnt-btn2" onClick={showComments}> {isOpen ? 'Hide Comments' : 'View Comments'} </a>
            </div>
            
        </div>
            {/* {isOpen && <CommentSection comments={comments} post_id={props.id}/> && console.log(props.id)  } */}
             
      
        <div className="right-panel2">
            <div id='food-image'>
                <AdvancedImage cldImg={image} width={300} height={150}/>
            </div>

            <div className="card2" id='dish-description'>
                <p className='text'> <span>Description: </span> {props.recipeDescription} </p>
            </div>

            <div className="card2" id='personal-description'>
                <p className='text2'> <span>Story: </span>{props.personalDescription}</p>
            </div>
        </div>
        
    </div>
    <div id='comment-cont'>
    {isOpen && <div className='commentContainer2'><CommentModal currentUserId={userName} currentUser={displayName} open={isOpen} setIsOpen={setIsOpen} comments={comments} setComments={setComments}post_id={props.id}/></div>}
    </div>
    </div>

  )
}

export default Post
