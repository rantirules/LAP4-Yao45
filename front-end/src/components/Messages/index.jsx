import React, {useContext, useEffect} from 'react'

import ChatMessage from '../ChatMessage'
import { UserContext } from '../../App'

const Messages = (props) => {
    const username = useContext(UserContext)
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
        const response = await fetch('http://127.0.0.1:5000/messages', options)
        const data = await response.json()
        props.setMessages(data.messages)
    }

    const handleChange = (e) => {
        e.preventDefault()
        props.setFormValue(e.target.value)
    }

  return (
    <>
        <div>
            {props.messages && props.messages.map((msg, index) => <ChatMessage key={index} message={msg.text} username={msg.username}/>)}
        </div>
        <form onSubmit={sendMessage}>
            <input value={props.formValue} onChange={handleChange}/>
            <button type="submit">📮</button>
        </form>
    </>
  )
}

export default Messages