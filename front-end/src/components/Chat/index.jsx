import React, { useState } from 'react'
import './index.css'
import Messages from '../Messages';

const Chat = () => {
    const [messages, setMessages] = useState([{user: 'Charlie', text: 'Hello' }]);
    const [formValue, setFormValue] = useState('')


  return (
    <div className='chat-header'>
        <Messages messages={messages} formValue={formValue} setFormValue={setFormValue}/>
    </div>
  )
}

export default Chat