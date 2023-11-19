import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class CounterComponent extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    //Initial state or declare a state
    this.state = {
      count: 0,
      isLoading: false
    }
  }
  handleUpdateCount = () => {
    console.log('State of count: ' + this.state.count + ' is loading: ' + this.state.isLoading)
    this.setState({ count: this.state.count + 1 })
    // Không được update giá trị trực tiếp như sau :
    // this.setState.count = this.state.count + 1 ;
  }
  render() {
    return (
      <div>
        {/* Reading state  */}
        <p>You click {this.state.count} time</p>
        <button onClick={() => this.handleUpdateCount()}>Click me</button>
      </div>
    )
  }
}
