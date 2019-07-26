import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

// export const signup = ({email, password}) => {
//     return function(dispatch){

//     }
// }

// REFACTORING SINGUP

export const signup = (formProps, callback) => async dispatch =>{

    try{
        let response = await axios.post('/signup', formProps);

        console.log(response)

        //dispatch

        dispatch({type: AUTH_USER, payload: response.data.token});

        localStorage.setItem('token', response.data.token);
        callback();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'email is in use'})
    }
};

export const signin = (formProps, callback) => async dispatch => {

    try {
        let response = await axios.post('/signin', formProps);

        dispatch({type: AUTH_USER, payload: response.data.token});

        localStorage.setItem('token', response.data.token);
        callback();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'email or password is incorrect'})
    }

}

export const signout = () => {

    localStorage.removeItem('token')
    return {
        type: AUTH_USER,
        payload: ''
    }
}
