import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cart from './cart';
import Products from './products';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {product: [], filteredProduct: []};

  }
  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({products: data, filteredProducts: data}));
  }
  render(){
    return(
      <div className="App">
        <h2>React-Redux Store</h2>
        <p>Welcome to the React Store</p>
        <input type="text" name="search" placeholder="search"></input>
        
        <div className="info">
          {/*<label>Cart:0 Totalprice:$0</label>*/}
        </div>
        <div className="products">
          <table>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>My cart</th>
            </tr>
            <tr>
              <td><Products products={this.state.filteredProducts} handleAddToCart = {this.handleAddToCart}/></td>
              {/*<td><b>Eat one everyday, may keep the doctor away</b></td>
              <td><b>{formatCurrency{this.state.price}}</b></td>
              <td><button>Add to cart</button></td>*/}
            </tr>
            {/*<tr>
              <td><b><a href="#">Grape</a></b></td>
              <td><b>Wine is great, but grapes is even better</b></td>
              <td><b>$11</b></td>
              <td><button>Add to cart</button></td>
            </tr>
            <tr>
              <td><b><a href="#">Pineapple</a></b></td>
              <td><b>Enjoy but don't forget to peer first</b></td>
              <td><b>$8</b></td>
              <td><button>Add to cart</button></td>
            </tr>*/}
          </table>
        </div>
      </div>
    )
  }
}

export default App;
