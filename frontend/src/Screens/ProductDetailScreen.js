import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

import pic from '../images/a.jpg';


export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const {qty, setQty} = useState(1);
  const orderCreate = useSelector((state)=> state.orderDetails);
  const{ loading: loadingOrderCreate,
    error: errorOrderCreate,
    success: successOrderCreate} = orderCreate;
  

  useEffect(() => {
    
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successOrderCreate]);

  const orderHandler = (e) => {
    e.preventDefault()
    // dispatch(productId, (seller: {product.seller}, itemName: ))
  }

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
           <div className="col-12 col-sm-6 col-md-4">
             <img src={product.image} className="img-fluid" alt={product.name} />
           </div>
           <div className="col-sm-6">
             <h1>{product.name}</h1>
             <p className='card-text'>{product.category}</p>
             <p className='card-text'>{product.size}</p>
             <p className='card-text'>{product.seller}</p>
           </div>
           <div className="col">
             <div className="card">
               <div className="card-body">
                <p className='card-text'>Seller: {product.seller}</p>
                <p className='card-text'>Stock: {product.countInStock}</p>
                <div>
                   <input type='number' value='quantity' onChange={setQty}/>
                </div>
                <button onClick={orderHandler} className='primary'>
                  Request Order
                </button>
               </div>
             </div>             
           </div>
          </div>
        </div>
         )}
         </div>
       );
     }