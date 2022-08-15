import axios from "axios";
import {
	ADD_TASK_COMPLETED,
	ADD_TASK_PROGRESS,
	ADD_TASK_TODO,
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

export const addTodo = (payload) => (dispatch) => {
	dispatch({ type: ADD_TASK_TODO, payload });
};
export const addProgress = (payload) => (dispatch) => {
	dispatch({ type: ADD_TASK_PROGRESS, payload });
};
export const addCompleted = (payload) => (dispatch) => {
	// console.log("payload: ", payload);
	dispatch({ type: ADD_TASK_COMPLETED, payload });
};