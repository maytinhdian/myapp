import React, { Component } from 'react'

class ProductListComponent extends Component {
  render() {
    console.log('>>>>>>>>>check props: ', this.props)

    let products = this.props.products

    return (
      <div>
        <table cellPadding={5} cellSpacing={2} border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Price</td>
              <td>Content</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.content}</td>
                  <td></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductListComponent
