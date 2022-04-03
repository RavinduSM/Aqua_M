import Axios from "axios";
import {MESSAGE_SEND_FAIL, MESSAGE_SEND_REQUEST, MESSAGE_SEND_SUCCESS} from "../constants/messageConstants"

export const addMessage = (name, email, tele, msg) => async(dispatch) => {
    dispatch({
        type: MESSAGE_SEND_REQUEST, payload: {name, email, tele, msg}});
    try{
        const {data} = await Axios.post('/api/messages', {name, email, tele, msg});
        dispatch ({type: MESSAGE_SEND_SUCCESS, payload: data});
    } catch (error){
        dispatch({ type: MESSAGE_SEND_FAIL, payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,})
    }
};