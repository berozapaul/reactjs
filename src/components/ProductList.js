import React, { Component } from 'react';
import Product from './Product';
import {createSorter} from '../utils/Sort';
import {createFilter} from '../utils/Filter';

class ProductList extends Component{
    state = {productList: []}

    // This method will get called whenever any change happens to props values.
    componentWillReceiveProps(nextProps){
        let term = nextProps.term;
        let filters = [{property: 'title', value: term}, {property: 'place', value: term}];
        if(typeof nextProps.products === 'object'){
            let foundProducts = nextProps.products.filter(createFilter(filters));
            this.setState({productList: foundProducts});
        }
    }

    render(){
        let sorters = [{property: 'vote', direction: 'DESC'}];
        let productList = 'No match found for your search: ' + this.props.term;
        if(this.state.productList.length > 0){
            productList = this.state.productList.sort(createSorter(...sorters)).map((product) =>
                <Product key={product.id} productId={product.id} data={product} onVoteUp={this.props.onVoteUp}/> )
        }
        return(
            <div className="container">{productList}</div>
        )
    }
}

export default ProductList;