import PropTypes from "prop-types";
import React, { Component } from "react";

export default class CounterComponent extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    //Initial state or declare a state
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        {/* Reading state  */}
        <p>You click {this.state.count} time</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
