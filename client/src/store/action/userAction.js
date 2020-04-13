import axios from 'axios'
import * as actionType from './actionTypes'


export const signupUser= (userData) => {
    return { type: actionType.SIGNUP_USER , payload: userData }
}
export const signupUserAsync = (data) => {
    return dispatch => {
        axios.post('http://localhost:5000/signup',data)
            .then(response => {
                console.log('====>',response.data)
                dispatch(signupUser(response.data))
            })
    }
}



export const signinUser = (userData) => {
    return { type: actionType.SIGNIN_USER, payload: userData }
}

export const signinUserAsync = (item) => {
    return dispatch => {
        axios.post('http://localhost:5000/login',item)
            .then(response => {
                dispatch(signinUser(response.data))
            })
    }
}

