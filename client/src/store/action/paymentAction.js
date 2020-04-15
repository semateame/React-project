import axios from 'axios'
import * as actionType from './actionTypes'


export const payment=()=>{
    return {
        type:actionType.MAKE_PAYMENT, payload:val
    }
}


export const makePaymentAssync=(arr)=>{
    return dispatch=>{
        axios.post()
        .then ()
    }
}