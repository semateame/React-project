import axios from 'axios'
import * as actionType from './actionTypes'


export const initPosts = (posts) => {
    return { type: actionType.INIT_POSTS, posts: posts }
}
export const fetchPostAsync = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                dispatch(initPosts(response.data))
            })
    }
}





export const addcountry = (posts) => {
    return { type: actionType.ADD_COUNTRY, payLoad: posts }
}

export const postCountryAsync = (item) => {
    return dispatch => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            item)
            .then(response => {
                console.log(response.data)
                dispatch(addcountry(response.data))
            })
    }
}

