import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_RESET, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_RESET, DELETE_PRODUCT_SUCCESS, PRODUCT_DETAILS_FAIL,
   PRODUCT_DETAILS_REQUEST, 
   PRODUCT_DETAILS_SUCCESS, 
   PRODUCT_LIST_FAIL, 
   PRODUCT_LIST_REQUEST, 
   PRODUCT_LIST_SUCCESS, 
   UPDATE_PRODUCT_FAIL, 
   UPDATE_PRODUCT_REQUEST,
   UPDATE_PRODUCT_RESET,
   UPDATE_PRODUCT_SUCCESS
  } from "../constants/productConstants";

export const productListReducer = (state = {loading: true, products: []}, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return{loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }    
}

export const productDetailsReducer = (
    state = { product: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_PRODUCT_REQUEST:
        return { loading: true };
      case CREATE_PRODUCT_SUCCESS:
        return { loading: false,  productss: action.payload };
      case CREATE_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      case CREATE_PRODUCT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PRODUCT_REQUEST:
        return { loading: true };
      case UPDATE_PRODUCT_SUCCESS:
        return { loading: false, success: true};
      case UPDATE_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      case UPDATE_PRODUCT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
        return { loading: true };
      case DELETE_PRODUCT_SUCCESS:
        return { loading: false, success: true };
      case DELETE_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      case DELETE_PRODUCT_RESET:
        return {};
      default:
        return state;
    }
  };