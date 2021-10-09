import React from 'react';
import {Link} from 'react-router-dom';

export default function Products(props) {
    const {product} = props;
  return (
    <div className="row">
      <Link to={`product/${product._id}`}>
        <div className="card">          
            <img className="img medium" src={product.image} alt={product.name}/>         
          <div className="card-body">
            <h4>{product.name}</h4>  
            <p>{product.size}</p>
            <h4>{product.name}</h4>
          </div> 
        </div>
      </Link>        
     </div> 
  );
}
