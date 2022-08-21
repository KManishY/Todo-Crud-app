import axios from "axios";
import {
	GET_TASK_FAILURE,
	GET_TASK_LOADING,
	GET_TASK_SUCCESS,
	GET_TAG_LOADING,
	GET_TAG_SUCCESS,
	GET_TAG_FAILURE,
} from "./actionType.js";

export const getTasks = () => (dispatch) => {
	dispatch({ type: GET_TASK_LOADING });
	return axios
		.get("http://localhost:8080/tasks")
		.then((response) => {
			dispatch({ type: GET_TASK_SUCCESS, payload: response.data });
		})
		.catch((error) => {
			dispatch({ type: GET_TASK_FAILURE, payload: error });
		});
};
export const getTagsList = () => (dispatch) => {
	dispatch({ type: GET_TAG_LOADING });
	return axios
		.get("http://localhost:8080/tagList")
		.then((response) => {
			dispatch({ type: GET_TAG_SUCCESS, payload: response.data });
		})
		.catch((error) => {
			dispatch({ type: GET_TAG_FAILURE, payload: error });
		});
};

// export const addTodo = (payload) => (dispatch) => {
// 	dispatch({ type: ADD_TASK_TODO, payload });
// };
// export const addProgress = (payload) => (dispatch) => {
// 	dispatch({ type: ADD_TASK_PROGRESS, payload });
// };
// export const addCompleted = (payload) => (dispatch) => {
// 	// console.log("payload: ", payload);
// 	dispatch({ type: ADD_TASK_COMPLETED, payload });
// };