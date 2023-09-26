import React, { useState, useEffect } from 'react'
import './index.css'
import Messages from '../Messages';
import ProfileIcon from '../ProfileIcon';

const Chat = () => {
    const [messages, setMessages] = useState()
    const [formValue, setFormValue] = useState('')
    const [users, setUsers] = useState([])
    const [dialogues, setDialogues] = useState([])
    const [currentDialogue, setCurrentDialogue] = useState()

    useEffect(() => {
      const getUsers = async () => {
        const response = await fetch('http://127.0.0.1:5000/users')
        const data = await response.json()
        setUsers(data.users)
        console.log(users)
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
    <>
      <div className='users'>
        {dialogues && users.map((u, idx) => 
           <ProfileIcon username={u.username} receiver={u.receiver} key={idx} dialogue_id={u.id} currentDialogue={currentDialogue} setCurrentDialogue={setCurrentDialogue} setMessages={setMessages} messages={messages}/>
        )}
      </div>
      {currentDialogue ? 
      <div className='chat-header'>
          <Messages messages={messages} setMessages={setMessages} formValue={formValue} setFormValue={setFormValue} currentDialogue={currentDialogue}/>
      </div> : <div>No chat loaded</div>}
    </>
  )
}

export default Chat