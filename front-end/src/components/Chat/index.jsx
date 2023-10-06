import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import Messages from '../Messages';
import ProfileIcon from '../ProfileIcon';
import { Button } from '@mui/material';
import { useAuth } from '../Auth/AuthContext';

import { useNavbar } from '../Navbar/NavbarContext';

// const loginButtonStyles = {
//   fontSize:'15px'
// };

const Chat = () => {

  const { navbarPosition } = useNavbar();


  const { isLoggedIn, login, logout, userName } = useAuth();
    const [messages, setMessages] = useState()
    const [formValue, setFormValue] = useState('')
    const [users, setUsers] = useState([])
    const [dialogues, setDialogues] = useState([])
    const [currentDialogue, setCurrentDialogue] = useState()
    const [user, setUser] = useState('')
    const currentUserId = userName
    const [loading, setLoading] = useState(false)
    const [usersOpen, setUsersOpen] = useState(false)



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
      setUsersOpen(true)
    }
    console.log(dialogues)
  return (
    <div id='chat-page-cont' className={navbarPosition === 'closed' ? 'closed' : ''}>
    <div className='chat-container'>
      <div id='sidebar'>
        <div id='navbar-chat'>
          <h3 className='chat-title'>Culturify Chat</h3>
          <div className='user-log'>
            <p>{user}</p>
          </div>
        </div>

        <div id='second-cont'>        
        <div id='chats'>
          <h4 className='user-title'>Users</h4>
          {usersOpen && dialogues.map((u, idx) => 
            <ProfileIcon username={u.username} receiver={u.receiver} key={idx} dialogue_id={u.id} currentDialogue={currentDialogue} setCurrentDialogue={setCurrentDialogue} setMessages={setMessages} messages={messages}/>
          )}  
        </div>
        <div id="btn-container">
          <button
                // variant="outlined"
                // color="primary"
                id='chat-btn'
                // style={loginButtonStyles}
                onClick={createNewChat}>
            Start a New Chat!
          </button>
        </div>
        </div>
      </div>
      {dialogues ? 
      <div id='message-container'>
          <Messages messages={messages} setMessages={setMessages} formValue={formValue} setFormValue={setFormValue} currentDialogue={currentDialogue} currentUser={user}/>
      </div> : <div>No chat loaded</div>}
    </div>
    </div>

  )
}

export default Chat
