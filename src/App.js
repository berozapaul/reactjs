import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import ProductList from './components/ProductList';

class App extends Component {

    state = {products: [], term: ''}

    componentDidMount(){
        this.setState({products: this.props.data});
    }

    productVoteUp = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {vote: product.vote + 1,});
            } else {
                return product;
            }
        });
        this.setState({products: nextProducts,});
    }

    productSearch = (term) =>{
        this.setState({term: term});
    }

  render() {
    return (
      <div className="reactjs-app">
        <h2>Popular products</h2>
        <hr/>
        <Search onSearchChange={this.productSearch}/>
        <hr/>
        <ProductList products={this.state.products} term={this.state.term} onVoteUp={this.productVoteUp}/>
      </div>
    );

  }
}

export default App;
