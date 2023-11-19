import React, { Component } from 'react'
import '../App.css'

class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }
  handleShowHide() {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    let content
    if (this.state.status === false) {
      content = (
        <div>
          <button onClick={() => this.handleShowHide()}>Show</button>
        </div>
      )
    } else {
      content = (
        <div>
          <button onClick={() => this.handleShowHide()}>Hide</button>
          <div>Show Content</div>
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Demo Conditional Rendering</h1>
        <div>{content}</div>
      </div>
    )
  }
}

export default MyApp
