//IMPORT
import axios from "axios";
import {
	FAIL,
	GET_CURRENT,
	LOADING,
	SIGNIN,
	SIGNUP,
	SUCCESS,
} from "../actionTypes/actiontypes";

//USERS

export const signUpAction = (data, navigate) => async (dispatch) => {
	try {
		//POST USER
		const res = await axios.post("/users/signUp", data);
		dispatch({ type: SIGNUP, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		navigate("/");
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const signInAction = (data, navigate) => async (dispatch) => {
	try {
		//POST USER
		const res = await axios.post("/users/signIn", data);
		dispatch({ type: SIGNIN, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		navigate("/");
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const getCurrent = () => async (dispatch) => {
	const Token = localStorage.getItem("Token");

	const config = {
		headers: {
			Authorized: Token,
		},
	};
	try {
		//POST USER
		const res = await axios.get("/users/current", config);
		//DISPATCH THE ACTION
		dispatch({ type: GET_CURRENT, payload: res.data });
		dispatch({ type: LOADING });
		console.log(res);
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
			dispatch({ type: LOADING });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};
