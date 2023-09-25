import ChatMessage from '../ChatMessage'

import React from 'react'

const Messages = (props) => {
  return (
    <>
        <div>
            {props.messages && props.messages.map(msg => <ChatMessage key={msg.id} message={msg.data}/>)}
        </div>
        <form>
            <input />
            <button type="submit">📮</button>
        </form>
    </>
  )
}

export default Messages