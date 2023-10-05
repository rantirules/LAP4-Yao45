import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKitchenSet, faEarthAfrica, faLink} from '@fortawesome/free-solid-svg-icons'
import CommentModal from '../CommentModal'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Link } from 'react-router-dom';


import CommentSection from '../CommentSection/CommentSection'
import './index-2.css'
const Post = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`http://127.0.0.1:5000/posts/${props.id}/comments`)
            const data = await response.json()
            setComments(data.comments)
        }
        getComments()
    }, [])



    const showComments = (e) => {
        e.preventDefault()
        // console.log('COMMENTS SHOWING')
        setIsOpen(!isOpen)
        console.log('line 29', isOpen);
    }


  return (
    <div id='indiv-post-cont'>    
    <div className='postContainer2'>
        <div className="left-panel2">
            <div className="user2">
                <div id='user-icon-posts'><AccountCircleOutlinedIcon id='usericon'/></div>
                <h3>{props.username}</h3>
            </div>
            <div className="recipe2">
                {props.recipeName}
            </div>
            {/* <div className="links2"> */}
                {/* <div className="link2">
                    <FontAwesomeIcon icon={faUser}/>
                </div> */}
                
                <div className="link2">
                        <FontAwesomeIcon icon={faEarthAfrica}/>
                        <p> Culture </p>
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
                {/* <img src={props.recipePicture} alt="" /> */}
                <img src='home4.jpg' alt="" />
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
    {isOpen && <div className='commentContainer2'><CommentModal open={isOpen} setIsOpen={setIsOpen} comments={comments} post_id={props.id}/></div>}
    </div>
    </div>

  )
}

export default Post
