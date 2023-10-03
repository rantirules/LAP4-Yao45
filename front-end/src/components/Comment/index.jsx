import React from 'react'

const Comment = (props) => {
  return (
    <div>
        <h3>User: {props.user_id}</h3>
        <p>{props.text}</p>
        <p>Posted: {props.timestamp}</p>
    </div>
  )
}

export default Comment