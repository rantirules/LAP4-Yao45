import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import Messages from '../Messages';
import ProfileIcon from '../ProfileIcon';
import { UserContext } from '../../App';

const Chat = () => {
    const [messages, setMessages] = useState()
    const [formValue, setFormValue] = useState('')
    const [users, setUsers] = useState([])
    const [dialogues, setDialogues] = useState([])
    const [currentDialogue, setCurrentDialogue] = useState()
    const displayName = useContext(UserContext);

    useEffect(() => {
      const getUsers = async () => {
        const response = await fetch('http://127.0.0.1:5000/users')
        const data = await response.json()
        setUsers(data.users)
      }
      const getDialogues = async () => {
        const response = await fetch('http://127.0.0.1:5000/dialogues')
        const data = await response.json()
        setDialogues(data.dialogues)
        console.log(data.dialogues);
      }
      getUsers()
      getDialogues()
    },[])

  return (
    <div className='chat-container'>
      <div className='sidebar'>
        <div className='navbar-chat'>
          <h3 className='chat-title'>Culturify Chat</h3>
          <div className='user-log'>
            <p>{displayName}</p>
            <button>Logout</button>
          </div>
        </div>
        <div className='chats'>
          <h4 className='user-title'>Users:</h4>
          {dialogues && dialogues.map((u, idx) => 
            <ProfileIcon username={u.username} receiver={u.receiver} key={idx} dialogue_id={u.id} currentDialogue={currentDialogue} setCurrentDialogue={setCurrentDialogue} setMessages={setMessages} messages={messages}/>
          )}
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