
import * as actionTypes from '../action/actionTypes'


const initialState = {
    user:[]
}

const reducer = (state = initialState, action) => {


    if (action.type === actionTypes.SIGNUP_USER) {
        return {
            ...state,
            user: [action.payload, ...state.user]
        }
    }

    if (action.type === actionTypes.SIGNIN_USER) {
        return {
            ...state,
            user: [action.payload, ...state.user]
        }
    }
   
    return state;
}

export default reducer;




