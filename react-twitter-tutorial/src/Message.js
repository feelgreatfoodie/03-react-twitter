import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './MessageList.css'

const Message = ({message}) => {
  const timestamp = new Date(message.timestamp)
  return (
    <div className="Message">
        <p>@{message.handle}</p>
        <p>{message.text}</p>
      <div>
        <p><i className="fa fa-star" /> {message.stars}</p>
        <p>{timestamp.toDateString()}</p>
      </div>
    </div>
  )
}

export default Message
