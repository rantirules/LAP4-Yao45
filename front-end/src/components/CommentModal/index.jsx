import React, { useState } from 'react'
import {createPortal} from 'react-dom'
import Comment from '../Comment'
import './index.css'
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';




const CommentModal = (props) => {

  console.log(props)
    
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
      const post_id = props.post_id
      const user_id =6
      const username = props.currentUserId // REPLACE WITH CURRENT USER AUTH VALUE
      const text = commentText
      const comment = { user_id, username, text}
      e.preventDefault()
      const options = {
        method: "POST", headers: {
          'Content-Type' : 'application/json'
          },
          body: JSON.stringify(comment)
      }
      console.log(comment);
      const response = await fetch(`http://127.0.0.1:5000/posts/${props.post_id}/comments`, options)
      const newComments = await fetch(`http://127.0.0.1:5000/posts/${props.post_id}/comments`)
      const data = await newComments.json()
      props.setComments(data.comments)
    }
  return (
    <section className='commentSection'>        
      <div>{props.comments.map((c, idx) => {
          return <Comment key={idx} text={c.text} id={c.id} user_id={c.user_id} username={c.username} timestamp={c.time_posted}></Comment>
        })}</div>
      <form className='cmnt-sbmt-form' onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <button type="submit"> Send </button>
      </form>
    </section>


  )
}

export default CommentModal
