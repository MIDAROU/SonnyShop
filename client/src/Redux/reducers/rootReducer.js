//IMPORT
import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

//COMBINED REDUCER
const rootReducer = combineReducers({
	UserReducer,
});

//EXPORTS
export default rootReducer;
