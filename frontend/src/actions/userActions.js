import Axios from "axios";
import { MY_DETAILS_REQUEST, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_PROFILEUPDATE_REQUEST, USER_PROFILEUPDATE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch ({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userData', JSON.stringify(data));
    }catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const register = (name, email, password, address, telephone, isFarmer, isExporter) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: {name, email, password, address, telephone, isFarmer, isExporter}});
    try{
        const {data} = await Axios.post('/api/users/register', {name, email, password, address, telephone, isFarmer, isExporter});
        dispatch ({type: USER_REGISTER_SUCCESS, payload: data});
        dispatch ({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userData', JSON.stringify(data));
    }catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const signout = () => async (dispatch) =>{
    localStorage.removeItem('userData');
    dispatch({ type: USER_SIGNOUT});
    document.location.href='/signin';
}

export const listUsers = () => async(dispatch) => {
    dispatch({
        type: USER_LIST_REQUEST,
    });
    try{
        const {data} = await Axios.get('/api/users');
        dispatch({type: USER_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch ({type: USER_LIST_FAIL, payload: error.message});
    }
};

export const userDetail = (userId) => async(dispatch, getState) => {
    dispatch({type: USER_DETAILS_REQUEST,
    });
    try{
        const {data} = await Axios.get(`/api/users/${userId}`);
        dispatch({type: USER_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch ({type: USER_DETAILS_FAIL, payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
    }
};

export const detailsMine = (userId) => async(dispatch, getState) =>{
    dispatch({ type: MY_DETAILS_REQUEST, payload: userId});
    const{
        userSignin: {userData},
    } = getState();

    try{
        const {data} = await Axios.get(`/api/users/${userId}`,{
            headers: { Authorization: `Bearer ${userData.token}` },
        });
        dispatch({type: USER_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch ({type: USER_DETAILS_FAIL, payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
    }
};

export const updateUser = (user) => async(dispatch, getState) => {
    dispatch({type: USER_PROFILEUPDATE_REQUEST, payload: user });
    const {
        userSignin: {userData}
    } = getState();
    try{
        const{data} = await Axios.put('/api/users/updateProfile', user, {
            headers: {Authorization: `Bearer ${userData.token}`},
        });
        dispatch({type: USER_PROFILEUPDATE_SUCCESS, payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userData', JSON.stringify(data));
    } catch (error){
        dispatch ({type: USER_DETAILS_FAIL, payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
    }
}