import React from 'react';

const Product = ({data, onVoteUp}) =>{
   const {id, type, place, title, vote, image} = data || [];
   return(
       <div className="card row">
           <div className="col-xs-12 col-sm-4">
               <img src={image.src} className="img-responsive" alt=""/>
           </div>
           <div className="col-xs-12 col-sm-8">
               <div className="vote-block">
                   <a href={"javascript:void(0)"}>
                       <i className="fa fa-caret-up" onClick={() => onVoteUp(id)}></i>
                   </a>
                   <span className="vote">{vote || 0}</span>
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
