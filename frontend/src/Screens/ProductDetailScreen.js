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
  const [qty, setQty] = useState(1);  
  const [requiredDate, setRequiredDate] = useState();
  const [farmer, setFarmer] = useState();
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(''); 
 
  const { loading, error, product } = productDetails;

  const orderCreate = useSelector((state)=> state.orderDetails);
  const{ loading: loadingOrderCreate, error: errorOrderCreate, success: successOrderCreate, order} = orderCreate;
  
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userData } = userSignin;  


  const dispatch = useDispatch();

  useEffect(() => {  
    // if(successOrderCreate){
    //   dispatch({type: CREATE_PRODUCT_RESET});
    // }  
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, ]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createOrder({farmer: product.farmer, itemName: product.name, qty, unitPrice: product.price, requiredDate  } ))
  }

  return (
    <div className='container'>     
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
           <div className="col-sm-6  ">

             <img src={pic} className="img-fluid" alt={product.name} />
           </div>
           <div className="col-sm-6  ">
             <h1 className='text-success'>{product.name}</h1>
             {/* <p className='card-text'>{product.category}</p>
             <p className='card-text'>{product.size}</p>
             <p className='card-text'>{product.seller}</p> */}
             <div className="row">
              <div className="col-3">
                  <p className='fs-5'>Category</p>
                  <p className='fs-5'>Size</p>
                  <p className='fs-5'>Seller</p>
                </div>
                <div className="col-3">
                  <p className='fs-5'>{product.category}</p>
                  <p className='fs-5'>{product.size}</p>
                  <p className='fs-5'>{product.seller}</p>
                </div>
               </div>
           </div>
           <form className='form' onSubmit={submitHandler}>
           <div className="col-sm-6 ">
             <div className="card border border-success">
               <div className="card-body">
                <p className='card-text'>Price: {product.price}</p>
                <p className='card-text'>Stock: {product.countInStock}</p>
                <div>
                <input type="qty" className="form-control" 
                required onChange={(e) => setQty(e.target.value)} />
                </div>
                <div>
                   {/* <input type='date' value='rdate' onChange={setRequiredDate}/> */}
                   <input type="date" className="form-control"  name="input1" placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" title="Enter a date in this formart YYYY-MM-DD"
                   onChange ={(e) => setRequiredDate(e.targetValue)}/>
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