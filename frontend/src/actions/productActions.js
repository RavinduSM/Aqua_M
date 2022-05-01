import Axios from "axios";
import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/productConstants";

export const listProducts = ({farmer = ''}) => async(dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try{
        const {data} = await Axios.get(`/api/products?farmer=${farmer}`);
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch ({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
      const { data } = await Axios.get(`/api/products/${productId}`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const createproduct = (name, category, price, countInStock, size, des, image, farmer) => async (dispatch,getState) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST, payload: {name, category, price, countInStock, size, des, image, farmer} });
    const { userSignin: { userData }} = getState();
    try{
        const {data} = await Axios.post('/api/products', {name, category, price, countInStock, size, des, image, farmer}, 
        {
          headers: { Authorization: `Bearer ${userData.token}` },
        }
        );
        dispatch ({type: CREATE_PRODUCT_SUCCESS, payload: data});
    }catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

  export const updateProduct = (product) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST, payload: product });
    const {
      userSignin: { userData },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/products/${product._id}`, product, {
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const deleteproduct = (productId) => async (dispatch, getState) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST, payload: productId });
    const {
      userSignin: { userData },
    } = getState();
    try {
      const { data } = Axios.delete(`/api/products/${productId}`, {
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: message });
    }
  };
