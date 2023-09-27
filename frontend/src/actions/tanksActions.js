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

export const tankRegister = (length1, length2, fishName, fishLength, fishCal) => async(dispatch, getState) => {
    dispatch({type: TANK_Register_REQUEST, payload: {length1, length2, fishName, fishLength, fishCal} });
    const { userSignin: { userData }} = getState();
    try{
        const {data} = await Axios.post('/api/tanks/add', { length1, length2, fishName, fishLength, fishCal},
        {
            headers: { Authorization: `Bearer ${userData.token}` },
          }
        );
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