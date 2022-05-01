import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productUpdateReducer } from './reducers/productReducers';
import { userDetailReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateReducer } from './reducers/userReducers';
import { tankRegisterReducer } from './reducers/tankReducers'
import { productOrderReducer } from './reducers/orderReducers';
import { sendMessageReducer } from './reducers/messageReducers';
import { detailsMine } from './actions/userActions';

const initialState = {
    userSignin: {
        userData: localStorage.getItem('userData')
        ? JSON.parse(localStorage.getItem('userData'))
        : null,
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productDetails: productDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    tankRegister: tankRegisterReducer,
    userList: userListReducer,
    orderDetails: productOrderReducer,
    userDetails: userDetailReducer,
    myDetails: detailsMine,
    messageSend: sendMessageReducer,
    userUpdate: userUpdateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;
