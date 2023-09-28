import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKitchenSet, faEarthAfrica} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const PostVertical = (props) => {
  return (
    <div className='postContainer'>
        <div className="left-panel">
            <div className="user">
                <img src='https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg' alt="" />
                <h3>Charlie</h3>
            </div>
            <div className="recipe">
                Korean Fried Chicken
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
            <div className="card food-image">
                {/* <img id='image' src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg" alt="" /> */}
            </div>
            {/* <div className="card dish-description">
                <p className='text'>Dish Description</p>
            </div>
            <div className="card personal-description">
                <p className='text'>Personal Description</p>
            </div> */}
        </div>

    </div>
  )
}

export default PostVertical