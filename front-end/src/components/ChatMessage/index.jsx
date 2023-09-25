import React, {useContext} from 'react'
import { UserContext } from '../../App'

const ChatMessage = (props) => {
    // const { text, username, imageUrl } = props.message
    console.log(props.message)
    const username = useContext(UserContext)

    const messageClass = username === UserContext ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
        {/* <img src={imageUrl} alt="profile-picture" /> */}
        <h2>{props.username}</h2>
        <p>{props.message}</p>
    </div>
  )
}

export default ChatMessage