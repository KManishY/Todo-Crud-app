import {
	GET_TAG_FAILURE,
	GET_TAG_LOADING,
	GET_TAG_SUCCESS,
	GET_TASK_FAILURE,
	GET_TASK_LOADING,
	GET_TASK_SUCCESS,
} from "./actionType.js";

const initialState = {
	tasks: [],
	tags: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	console.log("payload: ", payload);
	switch (type) {
		case GET_TASK_LOADING:
			return {
				...state,
			};
		case GET_TASK_SUCCESS:
			return {
				...state,
				tasks: payload,
			};
		case GET_TASK_FAILURE:
			return {
				...state,
			};
		case GET_TAG_LOADING:
			return {
				...state,
			};
		case GET_TAG_SUCCESS:
			return {
				...state,
				tags: payload,
			};
		case GET_TAG_FAILURE:
			return {
				...state,
			};

		default:
			return state;
	}
};

// const newstate = {
// 	todo: [],
// 	inprogress: [],
// 	complete: [],
// };

// export const arrReducer = (state = newstate, action) => {
// 	const { type, payload } = action;
// 	switch (type) {
// 		case ADD_TASK_PROGRESS:
// 			return {
// 				...state,
// 				inprogress: [...state.inprogress, payload],
// 			};
// 		case ADD_TASK_TODO:
// 			return {
// 				...state,
// 				todo: [...state.todo, payload],
// 			};
// 		case ADD_TASK_COMPLETED:
// 			return {
// 				...state,
// 				complete: [...state.complete, payload],
// 			};

// 		default:
// 			return state;
// 	}
// };
