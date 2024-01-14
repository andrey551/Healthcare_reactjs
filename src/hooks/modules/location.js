import locationAPI from "../../api/locationAPI";
import { logout, setLoading } from "./auth";

const SET_LOCATIONS = 'SET_LOCATION'

const initialState = {
    locations: []
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
        default:
            return state;
    }
}

export function setLocations(value) {
    return {type: SET_LOCATIONS, value};
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