import {
    TANK_LIST_FAIL,
    TANK_LIST_REQUEST, 
    TANK_LIST_SUCCESS,
    TANK_Register_FAIL,
    TANK_Register_REQUEST,
    TANK_REGISTER_RESET,
    TANK_Register_SUCCESS
} from "../constants/tankConstants";

export const tankReducer = (state = {loading: true, tanks: []}, action) => {
    switch(action.type){
        case TANK_LIST_REQUEST:
            return {loading: true};
        case TANK_LIST_SUCCESS:
            return{loading: false, tanks: action.payload};
        case TANK_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const tankRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case TANK_Register_REQUEST:
            return {loading: true};
        case TANK_Register_SUCCESS:
            return {loading: false,success: true, tankData: action.payload};
        case TANK_Register_FAIL:
            return {loading: false, error: action.payload};
        case TANK_REGISTER_RESET:
            return {};
        default:
            return state;
    }
}