import React, {useContext} from 'react'

import ChatMessage from '../ChatMessage'
import { UserContext } from '../../App'

const Messages = (props) => {
    const user = useContext(UserContext)
    const sendMessage = async(e) => {
        const options = {method: "POST", headers: {
            'Content-Type' : 'application/json'
            },
            body: {user: user, text: JSON.stringify(props.formValue)}
        }
        e.preventDefault()
        await fetch('localhost:3000/messages', options)
    }

  return (
    <>
        <div>
            {props.messages && props.messages.map((msg, index) => <ChatMessage key={index} message={msg.text}/>)}
        </div>
        <form onSubmit={sendMessage}>
            <input value={props.formValue} onChange={(e) => {props.setFormValue(e.target.value)}}/>
            <button type="submit">📮</button>
        </form>
    </>
  )
}

export default Messages