import axios from "axios";
import {
	GET_TASK_FAILURE,
	GET_TASK_LOADING,
	GET_TASK_SUCCESS,
} from "./actionType.js";

export const getTask = () => (dispatch) => {
	dispatch({ type: GET_TASK_LOADING });
	return axios
		.get(" http://localhost:8080/todos")
		.then((response) => {
			dispatch({ type: GET_TASK_SUCCESS, payload: response.data });
		})
		.catch((error) => {
			dispatch({ type: GET_TASK_FAILURE });
		});
};
