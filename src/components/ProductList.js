import React from 'react';
import Product from './Product';

/*
 * Purpose: The purpose of this component is to render list of products.
 *          This component does not have any state hence it is
 *          a functional component. React also encourages to have stateless
 *          components. It has a child component called Product.
 * Version: 1.0
 * Author: dev@cefalo.com
 */
const ProductList = ({products, term, onVoteUp}) =>{
    let productList = (Boolean(term)) ? 'No match found for your search: ' + term : 'Products are not available yet.';
    if(Array.isArray(products) && products.length > 0){
        productList = products.map((product) =>
            <Product key={product.id} data={product} onVoteUp={onVoteUp}/> )
    }
    return(
        <div className="container">{productList}</div>
    )
};

export default ProductList;