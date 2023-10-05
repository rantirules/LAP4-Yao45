import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKitchenSet, faEarthAfrica} from '@fortawesome/free-solid-svg-icons'
import CommentModal from '../CommentModal'

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
        console.log('COMMENTS SHOWING')
        setIsOpen(!isOpen)
        console.log(isOpen);
    }


  return (
    <>    <div className='postContainer2'>
        <div className="left-panel2">
            <div className="user2">
                <img src='https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg' alt="" />
                <h3>{props.username}</h3>
            </div>
            <div className="recipe2">
                {props.recipeName}
            </div>
            <div className="links2">
                <div className="link2">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="link2">
                    <FontAwesomeIcon icon={faKitchenSet}/>
                </div>
                <div className="link2">
                    <FontAwesomeIcon icon={faEarthAfrica}/>
                </div>
            </div>
            <button className="cmnt-btn2" onClick={showComments}>View Comments</button>
            </div>
            {/* {isOpen && <CommentSection comments={comments} post_id={props.id}/> && console.log(props.id)  } */}
             
      
        <div className="right-panel2">
            <div className="card2 food-image">
                <img src={props.recipePicture} alt="" />
            </div>
            <div className="card2 dish-description">
                <p className='text'>{props.recipeDescription}</p>
            </div>
            <div className="card2 personal-description">
                <p className='text2'>{props.personalDescription}</p>
            </div>
        </div>
        
    </div>
    <div>
    {isOpen && <div className='commentContainer2'><CommentModal open={isOpen} setIsOpen={setIsOpen} comments={comments} post_id={props.id}/></div>}
    </div>
    </>

  )
}

export default Post