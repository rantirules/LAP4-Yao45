import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKitchenSet, faEarthAfrica} from '@fortawesome/free-solid-svg-icons'
import CommentModal from '../CommentModal'
import './index.css'
import CommentSection from '../CommentSection/CommentSection'

const Post = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`https://lap4-backend.onrender.com/posts/${props.id}/comments`)
            const data = await response.json()
            setComments(data.comments)
        }
        getComments()
    }, [])



    const showComments = (e) => {
        e.preventDefault()
        console.log('COMMENTS SHOWING')
        setIsOpen(!isOpen)
        console.log(isOpen);
    }


  return (
    <>    <div className='postContainer'>
        <div className="left-panel">
            <div className="user">
                <img src='https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg' alt="" />
                <h3>{props.username}</h3>
            </div>
            <div className="recipe">
                {props.recipeName}
            </div>
            <div className="links">
                <div className="link">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="link">
                    <FontAwesomeIcon icon={faKitchenSet}/>
                </div>
                <div className="link">
                    <FontAwesomeIcon icon={faEarthAfrica}/>
                </div>
            </div>
            <button className="cmnt-btn" onClick={showComments}>View Comments</button>
            </div>
            {/* {isOpen && <CommentSection comments={comments} post_id={props.id}/> && console.log(props.id)  } */}
             
      
        <div className="right-panel">
            <div className="card food-image">
                <img src={props.recipePicture} alt="" />
            </div>
            <div className="card dish-description">
                <p className='text'>{props.recipeDescription}</p>
            </div>
            <div className="card personal-description">
                <p className='text'>{props.personalDescription}</p>
            </div>
        </div>
        
    </div>
    <div>
    {isOpen && <div className='commentContainer'><CommentModal open={isOpen} setIsOpen={setIsOpen} comments={comments} post_id={props.id}/></div>}
    </div>
    </>

  )
}

export default Post