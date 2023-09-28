import React, { useState } from 'react'
import {createPortal} from 'react-dom'
import Comment from '../Comment'
import './index.css'

const CommentModal = (props) => {
    if(!props.open) return null

    const handleClick = (e) => {
        e.preventDefault()
        props.setIsOpen(false)
    }
  return createPortal(
    <div className="overlay">
            <div className='comments-modal'>
        <div>{props.comments.map((c, idx) => {
          return <Comment key={idx} text={c.text} id={c.id} user_id={c.user_id} timestamp={c.time_posted}></Comment>
        })}</div>
        <button onClick={handleClick}>Close</button>
    </div>
    </div>,
    document.body
  )
}

export default CommentModal