import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Product from '../components/Products';

export default function SearchScreen(props) {
    const { name = 'all' } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;

    useEffect(()=> {
        dispatch(listProducts({name: name !== 'all' ? name: ''}))
    }, [dispatch, name])
  return (
    <div>
        <div className="row">
            {loading? (
                <Loading/>
            ) : error? (
                <Message variant= 'danger'>{error}</Message>
            ) : (
                <div>{products.length} Results</div>
            )}
        </div>
        <div className="row top">
        <div className="col-1">
          <h3>Department</h3>
          <ul>
            <li>Categoey 1</li>
          </ul>
        </div>
        <div className="col-3">
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              {products.length === 0 && (
                <Message>No Product Found</Message>
              )}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


