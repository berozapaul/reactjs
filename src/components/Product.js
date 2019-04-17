import React from 'react';
/*
 * Purpose: The purpose of this component is to render a product.
 *          This component does not have any state hence it is
 *          a functional component. It does the stateUp of productID
 *          for up voting.
 * Version: 1.0
 * Author: dev@cefalo.com
 */
const Product = ({data, onVoteUp}) =>{
   const {id, type, place, title, vote, image:{src}} = data || [];
   return(
       <div className="card row">
           <div className="col-xs-12 col-sm-4">
               <img src={src} className="card-image img-responsive" alt=""/>
           </div>
           <div className="col-xs-12 col-sm-8">
               <div className="vote-block">
                   <a href={"javascript:void(0)"}>
                       <i className="fa fa-caret-up" onClick={() => onVoteUp(id)}></i>
                   </a>
                   <span className="vote">{vote}</span>
               </div>
               <div className="card-body">
                   <div className="card-type">{type} · {place}</div>
                   <h4 className="card-title">{title}</h4>
               </div>
           </div>
       </div>
   )
};
export default Product
