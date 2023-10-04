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
    const [user, setUser] = useState('')
    const currentUserId = userName
    const [loading, setLoading] = useState(false)



    useEffect(() => {
      console.log(currentUserId);
      const getCurrentUser = async () => {
        const response = await fetch(`http://127.0.0.1:5000/users/${currentUserId}`)
        const data = await response.json()
        setUser(data.user.username)
      }
      const getUsers = async () => {
        const response = await fetch('http://127.0.0.1:5000/users')
        const data = await response.json()
        setUsers(data.users)
      }
      const getDialogues = async () => {
        const response = await fetch(`http://127.0.0.1:5000/dialogues`)
        const data = await response.json()
        setDialogues(data.dialogues)
        console.log(dialogues);
      }
      getCurrentUser()
      getUsers()
      getDialogues()
    },[])

    const createNewChat = async () => {
      const getReceiver = await fetch('http://127.0.0.1:5000/users')
      const receiverData = await getReceiver.json()
      const receiver = receiverData.users[Math.floor(Math.random() * receiverData.users.length)].username
      console.log(receiver)
      const dialogue_arr = await fetch('http://127.0.0.1:5000/dialogues')
      const arr_data = await dialogue_arr.json()
      console.log(arr_data);
      const dialogue_id = arr_data.dialogues.length + 1
      if (!user){
        console.log('USER NOT DEFINED')
        return
      }
      const newDialogue = { user, receiver, dialogue_id}
      const options = {method: "POST", headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newDialogue)
    }
      const create = await fetch('http://127.0.0.1:5000/dialogues', options)
      const refreshDialogues = await fetch(`http://127.0.0.1:5000/dialogues/${user}`)
      const data = await refreshDialogues.json()
      console.log(dialogues);
    }
    console.log(dialogues)
  return (
    <div className='chat-container'>
      <div className='sidebar'>
        <div className='navbar-chat'>
          <h3 className='chat-title'>Culturify Chat</h3>
          <div className='user-log'>
            <p>{user}</p>
          </div>
        </div>
        <div className='chats'>
          <h4 className='user-title'>Users:</h4>
          {dialogues.map((u, idx) => 
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
          <Messages messages={messages} setMessages={setMessages} formValue={formValue} setFormValue={setFormValue} currentDialogue={currentDialogue} currentUser={user}/>
      </div> : <div>No chat loaded</div>}
    </div>
  )
}

export default Chat