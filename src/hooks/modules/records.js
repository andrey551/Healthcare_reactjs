import recordAPI from "../../api/recordAPI";
import { logout, setLoading } from "./auth";

const SET_RECORDS = 'SET_RECORDS'
const DELETE_RECORD = 'DELETE_RECORD'
const ADD_RECORD = 'ADD_RECORD'

const initialState = {
    records: [],
    recordToDel: null,
    recordToAdd : null
}

export default function recordReducer(state = initialState, action = {}) {
    switch(action.type) {
        case SET_RECORDS:
            return Object.assign(
                {},
                state,
                {
                    records: action.value
                }
            )
        case ADD_RECORD:
            return Object.assign(
                {},
                state,
                {
                    recordToAdd: action.value
                }
            )
        case DELETE_RECORD:
            return Object.assign(
                {},
                state,
                {

                    recordToDel: action.value
                }
            )
        default: 
            return state
    }
}

export function setRecords(value) {
    return {type: SET_RECORDS, value}
}

export function addRecords(value) {
    return {type: ADD_RECORD, value}
}

export function deleteRecords(value) {
    console.log(value)
    return {type: DELETE_RECORD, value}
}

export const getRecord = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    recordAPI.getRecords(JSON.parse(localStorage.getItem('tad')))
    .then(response => {
        if(response.status == 200) {
            dispatch(setRecords(response.data))
            

        } else {
            console.log(`unexpected response ${response.status} from server`);
        }

        
    })
    .catch(err => {
        console.log(err)
        if(err.status == 401) {
            dispatch(logout());
        } else {
            console.log(`unexpected error ${err.status} from server`)
        }
    })
    dispatch(setLoading(false))
}

export const deleteRecord = (value) => (dispatch, getState) => {
    dispatch(setLoading(true))
    recordAPI.deleteRecord(JSON.parse(localStorage.getItem('tad')).jwt, value.time)
    .then(response => {
        if(response.status == 200) {
            dispatch(getRecord())
        } else {
            alert(`Unexpected response ${response.status} from server`)
        }
    })
    .catch(err => {
        if(err.status == 401) {
            dispatch(logout())
        } else {
            alert(`Unexpected response ${err.response.status} from server`)
        }
    })
    dispatch(setLoading(false))
}

export const addRecord = () => (dispatch, getState) => {
    dispatch(setLoading(true))
    recordAPI.addRecord(JSON.parse(localStorage.getItem('tad')).jwt, 
                                    getState().records.recordToAdd)
    .then(response => {
        if(response.status == 200) {
            dispatch(getRecord())
        } else {
            alert(`Unexpected response ${response.status} from server`)
        }
        console.log(getState().records.records)
        dispatch(setLoading(false))
    })
    .catch(err => {
        if(err.response.status == 401) {
            dispatch(logout())
        } else {
            alert(`Unexpected response ${err.status} from server`)
        }
        console.log(getState().records.records)
        dispatch(setLoading(false))
    })
    
}