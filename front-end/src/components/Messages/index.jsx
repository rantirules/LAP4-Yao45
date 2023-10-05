import React, {useContext, useEffect} from 'react'

import ChatMessage from '../ChatMessage'
import { UserContext } from '../../App'

const Messages = (props) => {
    const username = props.currentUser
    const text = props.formValue
    const dialogue_id = props.currentDialogue
    const message = {username, text, dialogue_id}
    const sendMessage = async(e) => {
        const options = {method: "POST", headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(message)
        }
        console.log(message)
        e.preventDefault()
        const response = await fetch(`http://127.0.0.1:5000/messages`, options)
        const newMessages = await fetch(`http://127.0.0.1:5000/messages/${dialogue_id}`)
        const data = await newMessages.json()
        props.setMessages(data.messages)
        props.setFormValue('')
    }

    const handleChange = (e) => {
        e.preventDefault()
        props.setFormValue(e.target.value)
    }

  return (
    <>
        <div className='message-box'>
            {props.messages ? 
            <>{props.messages && props.messages.map((msg, index) => <ChatMessage key={index} message={msg.text} username={msg.username} currentUser={props.currentUser}/>)}</>
            : <p>Start a Conversation!</p>
        }
            
        </div>
        <form onSubmit={sendMessage} className='message-form'>
            <input value={props.formValue} onChange={handleChange}/>
            <button type="submit" className='message-input'> <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
    </>
  )
}

export default Messages
