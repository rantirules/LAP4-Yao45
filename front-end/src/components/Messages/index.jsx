import React from 'react'

const Messages = (props) => {
  return (
    <div>
        {props.messages && props.messages.map(msg => <ChatMessage key={msg.id} />)}
    </div>
  )
}

export default Messages