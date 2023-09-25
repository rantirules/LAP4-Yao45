import React, { useState } from 'react'
import './index.css'
import Messages from '../Messages';

const Chat = () => {
    const messages = useState([]);
  return (
    <div className='chat-header'>
        <Messages messages={messages}/>
    </div>
  )
}

export default Chat