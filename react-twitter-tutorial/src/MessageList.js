import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  render() {
    const { messages } = this.props

    return (
      <div className="MessageList">
        {messages.map(message =>
          <Message
            message={message}
            key={message.messages_id}
          />)}
      </div>
    )
  }
}

export default MessageList
