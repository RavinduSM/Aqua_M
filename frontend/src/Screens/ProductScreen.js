import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector ((state) => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect( () =>{
      dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    
  return (
    <div>
      { loading ? (
        <Loading/>
      ): error ?
      (<Message variant="danger">{error}</Message>
      ):(
        <div>
          <Link to ="/"> Back to Results</Link>
        <div className="row">
          <div className="col-2">
            <img 
              className ="large"
              src={product.image}
              alt={product.name}>
            </img>
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
      )
      }
      
    </div>
  );
}
