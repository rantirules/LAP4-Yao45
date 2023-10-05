import React, { useState } from 'react'
import {createPortal} from 'react-dom'
import Comment from '../Comment'
import './index.css'

const CommentModal = (props) => {
    const [commentText, setCommentText] = useState('')
    if(!props.open) return null

    const handleChange = (e) => {
      e.preventDefault
      setCommentText(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        props.setIsOpen(false)
    }
    const handleSubmit = async (e) => {
      const user_id = 1 // REPLACE WITH CURRENT USER AUTH VALUE
      const text = commentText
      const comment = { user_id, text}
      e.preventDefault()
      const options = {
        method: "POST", headers: {
          'Content-Type' : 'application/json'
          },
          body: JSON.stringify(comment)
      }
      const response = await fetch(`https://lap4-backend.onrender.com/posts/${props.post_id}/comments`, options)
    }
  return (
    <section className='commentSection'>        
      <div>{props.comments.map((c, idx) => {
          return <Comment key={idx} text={c.text} id={c.id} user_id={c.user_id} timestamp={c.time_posted}></Comment>
        })}</div>
        <form className='cmnt-sbmt-form' onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>
      <button type="submit">Comment</button>
    </form>
    </section>


  )
}

export default CommentModal