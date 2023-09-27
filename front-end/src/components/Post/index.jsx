import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKitchenSet, faEarthAfrica} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Post = (props) => {
  return (
    <div className='postContainer'>
        <div className="left-panel">
            <div className="user">
                <img src='https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg' alt="" />
                <h3>Charlie</h3>
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
        </div>
        <div className="right-panel">
            <div className="food-image">
                IMAGE HERE
            </div>
            <div className="dish-description">
                DESCRIPTION
            </div>
            <div className="personal-description">
                PERSONAL DESCRIPTION
            </div>
        </div>

    </div>
  )
}

export default Post