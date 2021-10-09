import React from 'react';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id)
  return (
    <div>
      <div className="row">
          <div className="col-2">
              <img src={product.image} alt={product.name} className="large"/>
          </div>
          <div className="col-2">
              <ul>
                  <li>
                      <h2>{product.name}</h2>
                  </li>
                  <li>size: {product.size}</li>
              </ul>
          </div>
      </div>
    </div>
  );
}
