import React from 'react';
import { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProduct } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { UPDATE_PRODUCT_RESET } from '../constants/productConstants';

export default function ProductEditScreen(props){

    const productId = props.match.params.id;
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [size, setSize] = useState('');
    const [des, setDes] = useState('');
    const [image, setImage] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const productUpdate = useSelector((state) => state.productUpdate);
    const {loading: lUpdate, error: eUpdate, success: sUpdate} = productUpdate;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(sUpdate){
            props.history.push('/productList');
        }
        if (!product || product._id !== productId|| sUpdate) {
            dispatch({type: UPDATE_PRODUCT_RESET});
            dispatch(detailsProduct(productId));
          } else {
            setName(product.name);
            setCategory(product.category);
            setPrice(product.price);
            setCountInStock(product.countInStock);
            setSize(product.size);
            setDes(product.des);
            setImage(product.image);                                   
          }
    }, [ product, dispatch, productId, sUpdate, props.history])

    const submitHandler= (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
              _id: productId,
              name,
              category,
              price,
              countInStock,
              size,
              des,
              image,                           
            })
          );
    }

  return (
    <div>
        <form className='form' onSubmit={submitHandler}>
            <h1>Edit </h1>
            {lUpdate && <Loading></Loading>}
            {eUpdate && <Message variant="danger">{eUpdate}</Message>}
            {loading ? (
            <Loading></Loading>
            ) : error ? (
            <Message variant="danger">{error}</Message>
            ) : (
            <>
                <div className="form-floating m-3">
                <input className='form-control'
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)} />
                    <label for="floatingInput">Name</label> 
                </div>

                <div className="form-floating m-3">
                <input className='form-control'
                    id="category"
                    type="text"
                    placeholder="Enter name"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)} />
                    <label for="floatingInput">Name</label> 
                </div>

                <div className="form-floating m-3">
                <input className='form-control'
                    id="price"
                    type="text"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)} />
                    <label for="floatingInput">Price</label> 
                </div>

                <div className="form-floating m-3">
                <input className='form-control'
                    id="countInStock"
                    type="text"
                    placeholder="Enter coint in stock"
                    value={countInStock}
                    onChange={(e)=> setCountInStock(e.target.value)} />
                    <label for="floatingInput">countInStock</label> 
                </div>

                <div className="form-floating m-3">
                <input className='form-control'
                    id="size"
                    type="text"
                    placeholder="Enter size"
                    value={size}
                    onChange={(e)=> setSize(e.target.value)} />
                    <label for="floatingInput">size</label> 
                </div>

                <div className="form-floating m-3">
                <input className='form-control'
                    id="des"
                    type="text"
                    placeholder="Enter size"
                    value={des}
                    onChange={(e)=> setDes(e.target.value)} />
                    <label for="floatingInput">description</label> 
                </div>

                <div className="form-floating m-3">
                <input className='form-control'
                    id="image"
                    type="text"
                    placeholder="Insert image"
                    value={image}
                    onChange={(e)=> setImage(e.target.value)} />
                    <label for="floatingInput">image</label> 
                </div>
                <div>              
                    <button className="primary" type="submit">
                        Update
                    </button>
                </div>
            </>
            )}
        </form>
    </div>
  )
}
