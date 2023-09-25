import React, { useState, useEffect } from 'react'
import './index.css'
import Messages from '../Messages';

const Chat = () => {
    const [messages, setMessages] = useState();
    const [formValue, setFormValue] = useState('')

  return (
    <div className='chat-header'>
        <Messages messages={messages} setMessages={setMessages} formValue={formValue} setFormValue={setFormValue}/>
    </div>
  )
}

export default Chat