import React, { Component } from 'react'
import './App.css'

const products = [
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

const compare = (recordA, recordB) => {
  if (recordA.category > recordB.category) {
    return -1
  }
  if (recordB.category > recordA.category) {
    return 1
  }
  // a must be equal to b
  return 0
}

let row = []
let currentCategory = null

products.sort(compare)
for (var i = 0; i < products.length; i++) {
  let product = products[i]
  let category = product.category
  if (category !== currentCategory) {
    row.push(
      <tr>
        <th colSpan='2'>{category}</th>
      </tr>
    )
  }
  if (product.stocked === false) {
    row.push(
      <tr >
        <td style={{color: 'red'}}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  } else {
    row.push(
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
  currentCategory = category
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inStock: false
    }

    this.handleOnCheckboxChange = this.handleOnCheckboxChange.bind(this)
  }

  handleOnCheckboxChange (inStock) {
    console.log('checked')
    // this.setState({
    //   inStock: true
    // })
  }

  render () {
    const inStock = this.props.inStock

    return (
      <div className = 'inventoryApp'>
        <input
          type='text'
          placeholder='Search...' />
        <p>
          <input
            checked={inStock}
            id='checkBox'
            type='checkbox'
            onChange={this.handleOnCheckboxChange} />
          Only show products in stock
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    )
  }
}

export default App
