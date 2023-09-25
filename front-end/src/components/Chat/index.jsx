import React, { useState } from 'react'
import './index.css'
import Messages from '../Messages';

const Chat = () => {
    const messages = useState([]);
    const [formValue, setFormValue] = useState('')


  return (
    <div className='chat-header'>
        <Messages messages={messages} formValue={formValue} setFormValue={setFormValue}/>
    </div>
  )
}

export default Chat