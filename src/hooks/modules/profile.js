import profileAPI from "../../api/profileAPI";
import {logout, setLoading} from "./auth";
import { getUser } from "./user";

const GET_WALLET = 'GET_WALLET'
const UPDATE_WALLET = 'UPDATE_WALLET'

const inititalState = {
    wallet: {}
}

export default function profileReducer(state = inititalState, action = {}) {
    switch(action.type) {
        case GET_WALLET:
            return Object.assign(
                {},
                state,
                {
                    wallet: action.value
                }
            )
        case UPDATE_WALLET:
            return Object.assign(
                {},
                state,
                {
                    wallet: {...state.wallet, ...action.value}
                }
            )
        default:
            return state;
    }

}

export function setWallet(value) {
    return {type: GET_WALLET, value}
}

export function updateWallet(value) {
    return {type: UPDATE_WALLET, value}
}

export const updateUser = (req) => (dispatch) => {
    dispatch(setLoading(true))
    profileAPI.updateUser(JSON.parse(localStorage.getItem('tad')), req)
    .then(response => {
        if(response.status === 200) {
            dispatch(getUser())
        } else {
            alert('404')
        }
    })
    .catch(err => {
        console.log(err)
        if(err.status == 401) {
        } else {
            console.log(`unexpected error ${err.status} from server`)
        }
    })
    dispatch(setLoading(false))    
}

export const updatePassword = (req) => (dispatch) => {
    dispatch(setLoading(true))
    profileAPI.updatePassword(JSON.parse(localStorage.getItem('tad')), req)
    .then(response => {
        if(response.status === 200) {
            localStorage.setItem('tad', JSON.stringify(response.data))
        } else {
            alert('404')
        }
    })
    .catch(err => {
        console.log(err)
        if(err.status == 401) {
            // dispatch(logout());
        } else {
            console.log(`unexpected error ${err.status} from server`)
        }
    })
    dispatch(setLoading(false))    
}

export const updateWalletdisp = (req) => (dispatch) => {
    dispatch(setLoading(true))
    profileAPI.updateWallet(JSON.parse(localStorage.getItem('tad')), req)
    .then(response => {
        if(response.status === 200) {
            dispatch(updateWallet(req));
        } else {
            alert('404')
        }
    })
    .catch(err => {
        console.log(err)
        if(err.status == 401) {
        } else {
            console.log(`unexpected error ${err.status} from server`)
        }
    })
    dispatch(setLoading(false))    
}

export const getWallet = () => (dispatch) => {
    dispatch(setLoading(true))
    profileAPI.getWallet(JSON.parse(localStorage.getItem('tad')))
    .then(response => {
        if(response.status === 200) {
            dispatch(setWallet(response.data))
        } else {
            alert('404')
        }
    })
    .catch(err => {
        console.log(err)
        if(err.status == 401) {
        } else {
            console.log(`unexpected error ${err.status} from server`)
        }
    })
    dispatch(setLoading(false))    
}