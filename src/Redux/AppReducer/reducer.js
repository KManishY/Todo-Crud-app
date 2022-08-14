import {
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
