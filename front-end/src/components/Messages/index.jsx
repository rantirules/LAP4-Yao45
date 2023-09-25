import React, {useContext, useEffect} from 'react'

import ChatMessage from '../ChatMessage'
import { UserContext } from '../../App'

const Messages = (props) => {
    console.log(props.messages);
    useEffect(()=> {
        const getData = async () => {
            const request = await fetch('http://127.0.0.1:5000/messages')
            const data = await request.json()
            props.setMessages(data.messages)
            console.log(props.messages)
        }
        getData()
    },[])
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
            {props.messages && props.messages.map((msg, index) => <ChatMessage key={index} message={msg.text} username={msg.username}/>)}
        </div>
        <form onSubmit={sendMessage}>
            <input value={props.formValue} onChange={(e) => {props.setFormValue(e.target.value)}}/>
            <button type="submit">📮</button>
        </form>
    </>
  )
}

export default Messages