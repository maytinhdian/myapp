import React, { Component } from 'react'
import '../App.css'
import ProductListComponent from './ProductListComponent'
class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
      products: [
        { id: 1, name: 'Iphone 18+ Pro Max', price: 1000, content: 'Iporn sieu luot' },
        { id: 2, name: 'Iphone 13+ Pro Max', price: 1100, content: 'Iporn sieu luot' },
        { id: 3, name: 'Iphone 12+ Pro Max', price: 10300, content: 'Iporn sieu luot' },
        { id: 4, name: 'Iphone 11+ Pro Max', price: 10540, content: 'Iporn sieu luot' },
        { id: 5, name: 'Iphone 9+ Pro Max', price: 10004, content: 'Iporn sieu luot' },
        { id: 6, name: 'Iphone 8+ Pro Max', price: 10004, content: 'Iporn sieu luot' }
      ]
    }
  }
  handleShowHide() {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    // let content
    // if (this.state.status === false) {
    //   content = (
    //     <div>
    //       <button onClick={() => this.handleShowHide()}>Show</button>
    //     </div>
    //   )
    // } else {
    //   content = (
    //     <div>
    //       <button onClick={() => this.handleShowHide()}>Hide</button>
    //       <div>Show Content</div>
    //     </div>
    //   )
    // }
    return (
      <div className="App">
        {/* <h1>Demo Conditional Rendering</h1>
        <div>{content}</div> */}

        <ProductListComponent products={this.state.products} />
      </div>
    )
  }
}

export default MyApp
