import { MESSAGE_SEND_FAIL, MESSAGE_SEND_REQUEST, MESSAGE_SEND_REST, MESSAGE_SEND_SUCCESS } from "../constants/messageConstants";

export const sendMessageReducer = (state ={}, action) =>{
    switch(action.type){
        case MESSAGE_SEND_REQUEST:
            return {loading: true};
        case MESSAGE_SEND_SUCCESS:
            return {loading: false,success:true, message: action.payload};
        case MESSAGE_SEND_FAIL:
            return {loading: false, error: action.payload};
        case MESSAGE_SEND_REST:
            return {};
        default:
            return state;
    }
}

