import userAPI from "../../api/userAPI";
import { logout, setLoading } from "./auth";

const CHANGE_USER = 'CHANGE_USER'
const SET_USER = 'SET_USER'

const initialState = {
    user: {
        name: '',
        avatar: '',
        age: '',
        height: 0,
        address: '', 
        longitude: null,
        latitude: null
    }
}

export default function userReducer(state = initialState, action = {}) {
    switch(action.type) {
        case CHANGE_USER:
            return Object.assign(
                {},
                state,
                {
                    user: action.value
                }
            )
        case SET_USER:
            return Object.assign(
                {},
                state,
                {
                    user: action.value
                }
            )
        default:
            return state;
    }
}

export function changeUser(value) {
    return {type: CHANGE_USER, value}
}

export function setUser(value) {
    return {type: SET_USER, value}
}

export const getUser = () =>(dispatch) => {
    dispatch(setLoading(true))
    userAPI.getUser(JSON.parse(localStorage.getItem('tad')))
    .then(response => {
        if(response.status == 200) {
            dispatch(setUser(response.data))
        } else {
            console.log(`unexpected response ${response.status} from server`);
        }

        dispatch(setLoading(false))
    })
    .catch(err => {
        if(err.status == 401) {
            dispatch(logout());
        } else {
            console.log(`unexpected response ${err.status} from server`)
        }

        dispatch(setLoading(false));
    })
}

export const updateUser = () =>(dispatch, getState) => {
    dispatch(setLoading(true))
    userAPI.updateUser(JSON.parse(localStorage.getItem('tad')).jwt,
                        getState().user.user.name,
                        getState().user.user.age,
                        getState().user.user.height,
                        getState().user.user.address)
    .then(response =>{
        if(response.status == 200) {
            dispatch(setUser(response.data))
        } else {
            alert(`Unexpected response ${response.status} from server`)
        }
        dispatch(setLoading(false));
    })
    .catch (err => {
        if(err.response.status == 401) {
            dispatch(logout())
        } else {
            alert(`Unexpected response ${err.response.status} from server`)
        }
        dispatch(setLoading(false));
    })
}