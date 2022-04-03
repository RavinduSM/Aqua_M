import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

export default function Products(props) {
    const {product} = props;
  return (
    <div className="col-md-6" >
           <div key={product._id} className="card m-1 md-m-3 shadow">
                <div className="row g-0">
                    <div className="col-5">
                        <a href={`/product/${product._id}`}>
                            <img src={product.image} className="product-img" alt={product.name} />
                        </a>                        
                    </div>
                <div className="col-7">
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                            <h2 className="card-title text-decoration-none">{product.name}</h2>                            
                        </a>                        
                        <p className="card-text ">{product.price}</p>
                        <p className="card-text m-0">{product.size}</p>
                        <p className="card-text m-0">{product.seller}</p>
                        <p className="card-text m-0"><small class="text-muted">{moment(product.updatedAt).startOf('day').fromNow()} </small></p>
                    </div>
                </div>
                </div>
            </div>
      </div>
  );
}
