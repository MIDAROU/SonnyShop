import { FAIL, GET_CURRENT, LOADING, SIGNUP } from "../actionTypes/actiontypes";

const initialState = {
	User: null,
	LoggedIn: false,
	Loading: true,
	Errors: null,
	Success: null,
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP: {
			localStorage.setItem("Token", action.payload.Token);
			return {
				...state,
				User: action.payload.User,
				LoggedIn: true,
				Errors: null,
				Success: null,
			};
		}
		case GET_CURRENT:
			return {
				...state,
				User: action.payload,
				LoggedIn: true,
				Errors: null,
			};
		case FAIL:
			return { ...state, Errors: action.payload.errors };
		case LOADING:
			return { ...state, Loading: false };
		default:
			return state;
	}
};

export default UserReducer;
