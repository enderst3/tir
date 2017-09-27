import React, { Component } from 'react'
import './App.css'

const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

let row = []
let currentCategory = null

for (var i = 0; i < products.length; i++) {
  let product = products[i]
  let category = product.category
  if (category !== currentCategory) {
    row.push(<tr><th colSpan='2'>{category}</th></tr>)
  }
  row.push(<tr><td>{product.name}</td><td>{product.price}</td></tr>)
  currentCategory = category
}

class App extends Component {
  render () {
    return (
      <div className = 'productTable'>
        <input
          type='text'
          placeholder='Search...' />
        <p>
          <input
            type='checkbox' />
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
