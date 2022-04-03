import React, { useEffect } from 'react';
import Products from '../components/Products';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import {  listProducts } from '../actions/productActions';


export default function HomeScreen() {
  const dispatch = useDispatch();
 const productList = useSelector((state) => state.productList);
 const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])
  return (
    <div>
      { loading ? (
        <Loading/>
      ): error ?
      (<Message variant="danger">{error}</Message>
      ):(
        <div className="row">
          {
              products.map((product) => (
                <Products key={product._id} product={product}/>
              ))
          }
        </div>
      )
      }
    </div>  
  );
}
