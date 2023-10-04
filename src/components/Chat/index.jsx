import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import Messages from '../Messages';
import ProfileIcon from '../ProfileIcon';
import { Button } from '@mui/material';
import { useAuth } from '../Auth/AuthContext';

const loginButtonStyles = {
  backgroundColor: 'black', // Background color for the login button
  color: 'white', // Text color for the login button
  textTransform: 'none',
  width: '200px',
  fontFamily: 'Nunito, sans-serif',
  borderRadius: '12px',
  padding: '10px',
  marginBottom: '20px',
};

const Chat = () => {
  const { isLoggedIn, login, logout, userName } = useAuth();
    const [messages, setMessages] = useState()
    const [formValue, setFormValue] = useState('')
    const [users, setUsers] = useState([])
    const [dialogues, setDialogues] = useState([])
    const [currentDialogue, setCurrentDialogue] = useState()
    const displayName = userName



    useEffect(() => {
      const getUsers = async () => {
        const response = await fetch('https://lap4-backend.onrender.com/users')
        const data = await response.json()
        setUsers(data.users)
      }
      const getDialogues = async () => {
        const response = await fetch(`https://lap4-backend.onrender.com/dialogues/${displayName}`)
        const data = await response.json()
        setDialogues(data.dialogues)
        console.log(data.dialogues);
      }
      getUsers()
      getDialogues()
    },[])

    const createNewChat = async () => {
      const options = {method: "POST", headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(displayName)
    }
      const response = await fetch('https://lap4-backend.onrender.com/dialogues', options)
    }

  return (
    <div className='chat-container'>
      <div className='sidebar'>
        <div className='navbar-chat'>
          <h3 className='chat-title'>Culturify Chat</h3>
          <div className='user-log'>
            <p>{displayName}</p>
          </div>
        </div>
        <div className='chats'>
          <h4 className='user-title'>Users:</h4>
          {dialogues && dialogues.map((u, idx) => 
            <ProfileIcon username={u.username} receiver={u.receiver} key={idx} dialogue_id={u.id} currentDialogue={currentDialogue} setCurrentDialogue={setCurrentDialogue} setMessages={setMessages} messages={messages}/>
          )}  
        </div>
        <div className="btn-container">
          <Button
                variant="outlined"
                color="primary"
                style={loginButtonStyles}
                onClick={createNewChat}
              >Start a New Chat!</Button>
        </div>
      </div>
      {dialogues ? 
      <div className='message-container'>
          <Messages messages={messages} setMessages={setMessages} formValue={formValue} setFormValue={setFormValue} currentDialogue={currentDialogue}/>
      </div> : <div>No chat loaded</div>}
    </div>
  )
}

export default Chat