import React, { Component } from 'react'
import './App.css'
import MessageList from './MessageList'

const MessageInput = ({ handleInput, newMessageText }) => {

  return (
    <div>
      <input onChange={handleInput} type="text" placeholder="Submit" />
      <button>Submit</button>
    </div>
  )
}

class App extends Component {
  state = {
    messages: [],
    newMessageText: ''
  }

  componentDidMount() {
    fetch('/api/messages')
      .then(stream => stream.json())
      .then(res => this.setState({
        messages: res.messages
      }, () => console.log('state', this.state)))
  }

  handleInput = ({ target }) => {
    this.setState({ newMessageText: target.value })
  }

  submitMessage = () => {
    const messages = this.state.messages
    const newMessage = {
      messages_id: messages.length + 1,
      handle: 'chrisbourlier',
      text: this.state.newMessageText,
      stars: 0,
      timestamp: Date.now()
    }
    messages.unshift(newMessage)
    this.setState({ messages: messages, newMessageText: '' })
  }

  render() {
    return (
      <div className="App">
        <h1>React Twitter</h1>
        <MessageInput
          handleInput={this.handleInput}
          newMessageText={this.state.newMessageText}
          submitMessage={this.submitMessage}
        />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App
