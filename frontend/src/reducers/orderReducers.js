import { PRODUCT_ORDER_FAIL, PRODUCT_ORDER_REQUEST, PRODUCT_ORDER_SUCCESS } from "../constants/orderConstants"

export const productOrderReducer = (state ={}, action) =>{
    switch(action.type) {
        case PRODUCT_ORDER_REQUEST:
            return {loading: true};
        case PRODUCT_ORDER_SUCCESS:
            return{laoding: false, success: true, order: action.payload};
        case PRODUCT_ORDER_FAIL:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
}