import React, { Component } from 'react';
import './App.css';
import data from './data';

import Header from './components/Header';
import Search from './components/Search';
import ProductList from './components/ProductList';
import ModalProvider from './components/ModalProvider';

import {createSorter} from './utils/Sort';
import {createFilter} from './utils/Filter';

/*
 * Purpose: App component is the entry point. It initializes the states.
 *          It loads the products from state before render gets called.
 *          This component is a state-full component. When the upVote happens
 *          the state gets changed and the render method gets called. When the
 *          search term changes, the state gets changed and the render method
 *          gets called.
 * Version: 1.0
 * Author: dev@cefalo.com
 */
class App extends Component {

    constructor(props){
        super(props);
        this.state = {products: data, term: ''};
    }

    productVoteUp = (productId) => {
        const nextProducts = this.state.products.map((product) =>
            // Lets update the vote if ID matches
            (product.id === productId) ?  Object.assign({}, product, {vote: product.vote + 1,}) : product
        );
        this.setState({products: nextProducts});
    };

    productSearch = (term) =>{
        // Change the state so that render gets called per search query.
        this.setState({term: term});
    };

    getProducts = () => {
        let queryString = this.state.term, stateProducts = this.state.products;
        if(queryString){
            // createFilter is an utility functional component
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
          // createSorter is an utility functional component
          let sorters = [{property: 'vote', direction: 'DESC'}];
          foundProducts.sort(createSorter(...sorters));
      }
      return (
          <ModalProvider>
              <div className="reactjs-app">
                  <Header/>
                  <div className="container">
                     <h2>Popular products</h2>
                     <hr/>
                     <Search onSearchChange={this.productSearch}/>
                  </div>
                  <hr/>
                  <ProductList products={foundProducts} term={this.state.term} onVoteUp={this.productVoteUp}/>
              </div>
          </ModalProvider>
      );
  }
}

export default App;
