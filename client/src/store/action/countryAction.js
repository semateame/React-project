import axios from 'axios'
import * as actionType from './actionTypes'


export const getCountry = (posts) => {
    return { type: actionType.GET_COUNTRY, payload: posts }
}
export const fetchPostAsync = () => {
    return dispatch => {
        axios.get('http://localhost:5000/product')
            .then(response => {
                dispatch(getCountry(response.data))
            })
    }
}



export const addcountry = (posts) => {
    return { type: actionType.ADD_COUNTRY, payload: posts }
}

export const postCountryAsync = (item) => {
    return dispatch => {
        axios.post('http://localhost:5000/products',item)
            .then(response => {
                dispatch(addcountry(response.data))
            })
    }
}

export const deletecountry = (posts) => {
    return { type: actionType.DELETE_COUNTRY, payload: posts }
}

export const deleteCountryAsync = (item) => {
    return dispatch => {
        axios.delete(`http://localhost:5000/products/${item}`)
            .then(response => {
                dispatch(deletecountry(item))
            })
    }
}
