import {USER_SIGNIN_SUCCESS, USER_SIGNIN_REQUEST, USER_SIGNOUT, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, MY_DETAILS_REQUEST, MY_DETAILS_SUCCESS, MY_DETAILS_FAIL, USER_PROFILEUPDATE_REQUEST, USER_PROFILEUPDATE_SUCCESS, USER_PROFILEUPDATE_RESET, USER_PROFILEUPDATE_FAIL} from '../constants/userConstants';

export const userListReducer = (state = {loading: true, users: []}, action) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return {loading: true};
        case USER_LIST_SUCCESS:
            return{loading: false, users: action.payload };
        case USER_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }    
}

export const userSigninReducer = (state = {}, action) => {
        switch(action.type){
            case USER_SIGNIN_REQUEST:
                return {loading: true};
            case USER_SIGNIN_SUCCESS:
                return {loading: false, userData: action.payload};
            case USER_SIGNIN_FAIL:
                return {loading: false, error: action.payload};
            case USER_SIGNOUT:
                return {};
            default:
                return state;
        }
};

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userData: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};       
        default:
            return state;
    }
};

export const userDetailReducer = (state ={loading: true, user: []}, action) =>{
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return{loading: true};
        case USER_DETAILS_SUCCESS:
            return{loading: false, user: action.payload};
        case USER_DETAILS_FAIL:
            return{ loading: false, error: action.payload};
        default:
            return state;
    }
};

export const myDetailReducer = (state = {loading: true}, action) => {
    switch (action.type){
        case MY_DETAILS_REQUEST:
            return{loading: true};
        case MY_DETAILS_SUCCESS:
            return{loading: false, user: action.payload};
        case MY_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type){
        case USER_PROFILEUPDATE_REQUEST:
            return{loading: true};
        case USER_PROFILEUPDATE_SUCCESS:
            return {loading: false, success: true};
        case USER_PROFILEUPDATE_FAIL:
            return {loading: false, error: action.payload};
        case USER_PROFILEUPDATE_RESET:
            return{};
        default: 
            return state;
    }
}