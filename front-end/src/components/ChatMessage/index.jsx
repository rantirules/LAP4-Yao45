import React, {useContext} from 'react'
import { UserContext } from '../../App'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const ChatMessage = (props) => {
    // const { text, username, imageUrl } = props.message
    console.log(props.message)
    const username = useContext(UserContext)
    console.log(username);

    const messageClass = props.currentUser === props.username ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
      <div className="messageInfo">
          <AccountCircleOutlinedIcon style={{color:'#1c1c1c'}}/>
        <h4 style={{color:'#1c1c1c'}}>{props.username}</h4>
      </div>
      <div className="messageContent">
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
