import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { detailsProduct } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_RESET } from '../constants/productConstants';

import pic from '../images/a.jpg';


export default function ProductScreen(props) {
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const {qty, setQty} = useState(1);
  const {date, setDate} = useState();
  const orderCreate = useSelector((state)=> state.orderDetails);
  const{ loading: loadingOrderCreate, error: errorOrderCreate, success: successOrderCreate, order} = orderCreate;
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userData } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {  
    if(successOrderCreate){
      dispatch({type: CREATE_PRODUCT_RESET});
    }  
    dispatch(detailsProduct(productId));
  }, [dispatch, productId,order, successOrderCreate ]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createOrder({farmer: product.farmer, name: product.name,user: userData._Id,  price: product.price,  Id: product._Id, }))
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
           <form className='form' onSubmit={submitHandler}>
           <div className="col">
             <div className="card">
               <div className="card-body">
                <p className='card-text'>Farmer: {product.farmer}</p>
                <p className='card-text'>Stock: {product.countInStock}</p>
                <div>
                {/* <input type="Number"  id="qty"    value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            /> */}
                </div>
                <div>
                   <input type='date' value='rdate' onChange={setDate}/>
                </div>
                <button type="submit" className='primary'>
                  Request Order
                </button>
                {loadingOrderCreate && <Loading></Loading>}
                {errorOrderCreate && <Message variant="danger">{errorOrderCreate}</Message>}
               </div>
             </div>             
           </div>
           </form>
          </div>
        </div>
         )}
         </div>
       );
     }