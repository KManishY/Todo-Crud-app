import {
	ADD_TASK_COMPLETED,
	ADD_TASK_PROGRESS,
	ADD_TASK_TODO,
	GET_TASK_FAILURE,
	GET_TASK_LOADING,
	GET_TASK_SUCCESS,
} from "./actionType.js";

const initialState = {
	tasks: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_TASK_LOADING:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case GET_TASK_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				tasks: [...payload],
			};
		case GET_TASK_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};

const newstate = {
	todo: [],
	inprogress: [],
	complete: [],
};

export const arrReducer = (state = newstate, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TASK_PROGRESS:
			return {
				...state,
				inprogress: [...state.inprogress, payload],
			};
		case ADD_TASK_TODO:
			return {
				...state,
				todo: [...state.todo, payload],
			};
		case ADD_TASK_COMPLETED:
			return {
				...state,
				complete: [...state.complete, payload],
			};

		default:
			return state;
	}
};
