import React, {useContext} from 'react'
import { UserContext } from '../../App'

const ChatMessage = (props) => {
    // const { text, username, imageUrl } = props.message
    console.log(props.message)
    const username = useContext(UserContext)
    console.log(username);

    const messageClass = username === props.username ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
      <div className="messageInfo">
        <img src='https://static.vecteezy.com/system/resources/thumbnails/006/017/592/small/ui-profile-icon-vector.jpg' alt="profile-picture" />
        <h4>{props.username}</h4>
      </div>
      <div className="messageContent">
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage