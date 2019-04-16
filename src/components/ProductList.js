import React from 'react';
import Product from './Product';

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