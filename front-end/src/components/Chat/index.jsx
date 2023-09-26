import React, { useState, useEffect } from 'react'
import './index.css'
import Messages from '../Messages';
import ProfileIcon from '../ProfileIcon';

const Chat = () => {
    const [messages, setMessages] = useState()
    const [formValue, setFormValue] = useState('')
    const [users, setUsers] = useState([])
    const [currentDialogue, setCurrentDialogue] = useState()

    useEffect(() => {
      const getUsers = async () => {
        const response = await fetch('http://127.0.0.1:5000/users')
        const data = await response.json()
        setUsers(data.users)
        console.log(users)
      }
      getUsers()
    },[])

  return (
    <>
      <div className='users'>
        {users && users.map((u, idx) => 
           <ProfileIcon username={u.username} key={idx} setCurrentDialogue={setCurrentDialogue}/>
        )}
      </div>
      <div className='chat-header'>
          <Messages messages={messages} setMessages={setMessages} formValue={formValue} setFormValue={setFormValue}/>
      </div>
    </>
  )
}

export default Chat