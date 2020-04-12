
import * as actionTypes from '../action/actionTypes'


const initialState = {
    posts: null
}

const reducer = (state = initialState, action) => {


    if (action.type === actionTypes.INIT_POSTS) {
        return {
            ...state,
            posts: action.posts
        }
    }


    if (action.type === actionTypes.ADD_COUNTRY) {

        return {
            ...state,
            posts: [action.payLoad, ...state.posts]
        }
    }
    return state;
}

export default reducer;




