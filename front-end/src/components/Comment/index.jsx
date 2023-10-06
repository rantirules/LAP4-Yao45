import React from 'react'
import './index.css'

const Comment = (props) => {
  const formattedTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      month: 'short',
      day: '2-digit',
      timeZone: 'Atlantic/Reykjavik'
    };
    return date.toLocaleString('en-US', options);
  };

  const originalTimeStamp = props.timestamp
  const formatted = formattedTimestamp(originalTimeStamp)
  return (
    <div className='cmnt'>
        <h3 className='user-tag'>User: {props.username}</h3>
        <p className='user-cmnt'>{props.text}</p>
        <p className='date-tag'>{formatted}</p>
    </div>
  )
}

export default Comment
