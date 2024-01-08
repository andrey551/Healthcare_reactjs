import { combineReducers } from "redux";
import authReducer from "./modules/auth";
import userReducer from "./modules/user";
import recordReducer from "./modules/records";

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    records: recordReducer
})

export default reducer;