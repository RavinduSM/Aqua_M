import Axios from 'axios';

import { PRODUCT_ORDER_FAIL, PRODUCT_ORDER_REQUEST, PRODUCT_ORDER_SUCCESS } from "../constants/orderConstants"


export const createOrder = (farmer, itemName, qty, unitPrice, requiredDate) => async (dispatch, getState) =>{
    dispatch({ type: PRODUCT_ORDER_REQUEST, payload: {farmer, itemName, qty, unitPrice,  requiredDate } });
    const { userSignin: { userData }} = getState();
    try{        
        const {data} = await Axios.post('/api/orders', {farmer, itemName, qty, unitPrice,  requiredDate } , 
        {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        });
        dispatch({type: PRODUCT_ORDER_SUCCESS, payload: data});
    } catch (error){
        dispatch({
            type: PRODUCT_ORDER_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}