import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  createproduct, deleteproduct, listProducts } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { CREATE_PRODUCT_RESET, DELETE_PRODUCT_RESET } from '../constants/productConstants';

export default function ProductDisplayScreen(props) {
    const farmerMode = props.match.path.indexOf('/farmer') >=0;
    const productList = useSelector((state) => state.productList);
    const {loading, error, products } = productList;

    // const productCreate = useSelector((state) => state.productCreate);
    // const { loading: ldingCreate, error: errorCreate, success: successCreate, product: createProduct, } = productCreate;

    const productDelete = useSelector((state) => state.productDelete);
    const { loading: ldingDelete, error: errorDelete, success: successDelete, product: deleteProduct, } = productDelete;

    const userSignin = useSelector((state) => state.userSignin);
    const { userData } = userSignin;
    const dispatch = useDispatch();



    useEffect(() => { 
    // if (successCreate) {
    //     dispatch({ type: CREATE_PRODUCT_RESET});   
    //     props.history.push(`/product/${createProduct._id}/edit`);     
    // }
    if (successDelete) {
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
    dispatch(listProducts({ farmer: farmerMode ? userData._id : '' }));
      }, [dispatch, props.history, farmerMode, successDelete, userData._id,
      ]);

    const deleteHandler = (product) => {
      if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteproduct(product._id));
      }
    };
    const createHandler = () =>{
        dispatch(createproduct());
    }

  return (
      <div className="container">
          <button type="button" className="primary" >
         <Link to='/insertProduct' > Create Product</Link>
        </button>
      {ldingDelete && <Loading></Loading>}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {/* {ldingCreate && <Loading></Loading>}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>} */}
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
         <table className="table table-info table-striped ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col"> Fish Species </th>
                        <th scope="col"> Size </th>
                        <th scope="col"> Quantity </th>
                        <th scope="col"> Price </th>
                        <th scope="col"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>(
                    <tr key = {product._id}>
                        <td>{product.name}</td>
                        <td>{product.size}</td>
                        <td>{product.countInStock}</td>
                        <td>{product.price}</td>
                        <td>actions</td>
                        <td>
                        <div className="d-grid d-flex ">
                            <button type="button" onClick={() => props.history.push(`/product/${product._id}/edit`) }> Edit </button>
                            <button type="button" onClick={() => deleteHandler(product)}>  Delete </button>
                        </div> 
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
      )}
            </div>
      
  );
}
