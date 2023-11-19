import React, { Component } from 'react'

class CalculatorComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: '',
      num2: ''
    }
  }
  handelOnChangeSum1 = event => {
    this.setState({
      num1: parseInt(event.target.value)
    })
  }
  handelOnChangeSum2 = event => {
    this.setState({
      num2: parseInt(event.target.value)
    })
  }

  handleCalculateSum() {
    let sum = this.state.num1 + this.state.num2
    alert(sum)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', 'prevState: ', prevState, ' current state: ', this.state)
  }
  render() {
    return (
      <div className="App">
        <form action="" className="App">
          <h2>Demo Calculation App</h2>
          <br />
          <div className="App">
            <table>
              <tr>
                <td>Number 1 </td>
                <td>
                  <input type="number" value={this.state.num1} onChange={event => this.handelOnChangeSum1(event)} />
                </td>
              </tr>
              <tr>
                <td>Number 2 </td>
                <td>
                  <input type="number" value={this.state.num2} onChange={event => this.handelOnChangeSum2(event)} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button>Sum</button>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    )
  }
}

export default CalculatorComponent
