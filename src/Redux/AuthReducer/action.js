import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType.js";

export const login = (params) => (dispatch) => {
	dispatch({ type: LOGIN_REQUEST });
	return axios
		.get(" http://reqres.in/api/login", params)
		.then((response) => {
			dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
		})
		.catch((error) => {
			dispatch({ type: LOGIN_FAILURE, payload: e });
		});
};
