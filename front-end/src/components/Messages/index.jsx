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
    const username = useContext(UserContext)
    const text = props.formValue
    const message = {username, text}
    const sendMessage = async(e) => {
        const options = {method: "POST", headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(message)
        }
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:5000/messages', options)
        const data = await response.json()
        console.log(data)
        props.setMessages(data.messages)
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