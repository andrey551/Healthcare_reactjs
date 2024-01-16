import locationAPI from "../../api/locationAPI";
import { logout, setLoading } from "./auth";

const SET_LOCATIONS = 'SET_LOCATION'
const SET_DETAIL = 'SET_DETAIL'
const LOAD_COMMENTS = 'LOAD_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const LOAD_DEPARTMENT = 'LOAD_DEPARTMENT'



const initialState = {
    locations: [],
    detail: {
        location: null,
        comments: [],
        departments : []
    }
}

export default function locationReducer(state = initialState, action = {}) {
    switch(action.type) {
        case SET_LOCATIONS:
            return Object.assign(
                {},
                state,{
                    locations: action.value
                }
            )
        case SET_DETAIL:
            return Object.assign(
                {},
                state,
                {
                    detail:{
                        ...state.detail, 
                        location: action.value
                    } 
                }
            )
        case LOAD_COMMENTS:
            return Object.assign(
                {},
                state, {
                    detail: {
                        ...state.detail,
                        comments: action.value
                    }
                }
            )
        case ADD_COMMENT:
            return Object.assign(
                {},
                state, {
                    detail: {
                        ...state.detail,
                        comments: [...state.detail.comments, action.value]
                    } 
                }
            )
        case LOAD_DEPARTMENT:
            return Object.assign(
                {},
                state, 
                {
                    detail: {
                        ...state.detail, 
                        departments: action.value
                    }
                }
            )
        default:
            return state;
    }
}

export function setLocations(value) {
    return {type: SET_LOCATIONS, value};
}

export function setDetail(value) {
    return {type: SET_DETAIL, value};
}

export function setComments(value) {
    return {type: LOAD_COMMENTS, value};
}

export function setCommentToAdd(value) {
    return {type: ADD_COMMENT, value}
}
export function setDepartment(value) {
    return {type: LOAD_DEPARTMENT, value}
}

export const getLocation = (req) => (dispatch) => {
    dispatch(setLoading(true));
    console.log(JSON.stringify(req))
    locationAPI.getLocations(JSON.parse(localStorage.getItem('tad')), req)
    .then(response => {
        if(response.status == 200) {
            dispatch(setLocations(response.data))
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

export const loadComment = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    console.log(getState().location.detail)
    let lon = getState().location.detail.location.longitude;
    let lat = getState().location.detail.location.latitude;
    let coor = {longitude: lon, latitude: lat}
    locationAPI.loadComment(JSON.parse(localStorage.getItem('tad')), coor)
    .then(response => {
        if(response.status === 200) {
            dispatch(setComments(response.data))
        }
        else {
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

export const addComment = (comment) => (dispatch, getState) => {
    dispatch(setLoading(true));

    console.log(comment)
    let lon = getState().location.detail.location.longitude;
    let lat = getState().location.detail.location.latitude;
    let coor = {longitude: lon, latitude: lat}
    locationAPI.addComment(JSON.parse(localStorage.getItem('tad')), coor, {content: comment.myComment, rating: Number.parseInt(comment.rate)})
    .then(response => {
        if(response.status === 200) {
            console.log('added comment!');
        }
        else {
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

export const loadDepartment = () =>(dispatch, getState) => {
    dispatch(setLoading(true));
    let lon = getState().location.detail.location.longitude;
    let lat = getState().location.detail.location.latitude;
    let coor = {longitude: lon, latitude: lat}
    locationAPI.loadDepartment(JSON.parse(localStorage.getItem('tad')), coor)
    .then(response => {
        if(response.status === 200) {
            console.log('Load Department!');
        }
        else {
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