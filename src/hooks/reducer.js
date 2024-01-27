import { combineReducers } from "redux";
import authReducer from "./modules/auth";
import userReducer from "./modules/user";
import recordReducer from "./modules/records";
import locationReducer from "./modules/location";
import profileReducer from "./modules/profile";

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    records: recordReducer,
    location: locationReducer,
    profile: profileReducer
})

export default reducer;