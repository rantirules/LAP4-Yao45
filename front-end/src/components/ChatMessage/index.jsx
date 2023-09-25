import React from 'react'
import { UserContext } from '../../App'

const ChatMessage = (props) => {
    const { text, username, imageUrl } = props.message

    const messageClass = username === UserContext ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
        <img src={imageUrl} alt="profile-picture" />
        <p>{text}</p>
    </div>
  )
}

export default ChatMessage