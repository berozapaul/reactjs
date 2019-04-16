import React, { Component } from 'react';
import './App.css';
import data from './data';

import Search from './components/Search';
import ProductList from './components/ProductList';
import {createSorter} from './utils/Sort';
import {createFilter} from './utils/Filter';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {products: data, term: ''};
    }

    productVoteUp = (productId) => {
        const nextProducts = this.state.products.map((product) =>
            (product.id === productId) ?  Object.assign({}, product, {vote: product.vote + 1,}) : product
        );
        this.setState({products: nextProducts});
    };

    productSearch = (term) =>{
        this.setState({term: term});
    };

    getProducts = () => {
        let queryString = this.state.term, stateProducts = this.state.products;
        if(queryString){
            let filters = [{property: 'title', value: queryString}, {property: 'place', value: queryString}];
            if(typeof stateProducts === 'object'){
                return stateProducts.filter(createFilter(filters));
            }
        }
        return this.state.products;
    };

  render() {
      let foundProducts = this.getProducts();
      if(Array.isArray(foundProducts) && foundProducts.length > 0 ){
          let sorters = [{property: 'vote', direction: 'DESC'}];
          foundProducts.sort(createSorter(...sorters));
      }
      return (
        <div className="reactjs-app">
          <h2>Popular products</h2>
          <hr/>
          <Search onSearchChange={this.productSearch}/>
          <hr/>
          <ProductList products={foundProducts} term={this.state.term} onVoteUp={this.productVoteUp}/>
        </div>
      );
  }
}

export default App;
