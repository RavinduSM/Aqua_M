import Axios from "axios";
import { 
    TANK_LIST_FAIL, 
    TANK_LIST_REQUEST,
    TANK_LIST_SUCCESS,
    TANK_Register_FAIL,
    TANK_Register_REQUEST,
    TANK_Register_SUCCESS,
} from "../constants/tankConstants";

export const listTanks = () => async(dispatch) => {
    dispatch({
        type: TANK_LIST_REQUEST,
    });
    try{
        const{data} = await Axios.get('/api/tanks');
        dispatch({ type: TANK_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: TANK_LIST_FAIL, payload: error.message});
    }
};

export const tankRegister = (fishName) => async(dispatch) => {
    dispatch({type: TANK_Register_REQUEST, payload: {fishName} });
    try{
        const {data} = await Axios.post('/api/tanks/register', { fishName});
        dispatch ({type: TANK_Register_SUCCESS, payload: data});        
    } catch (error) {
        dispatch({
            type: TANK_Register_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}