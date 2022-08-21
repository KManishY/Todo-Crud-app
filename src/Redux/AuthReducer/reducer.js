import { getLocalData, saveLocalData } from "../../Utils/localStoreage.js";
import * as types from "./actionType.js";

const initialState = {
	isAuth: getLocalData("token") ? true : false,
	token: saveLocalData("token") || "",
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.LOGIN_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case types.LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuth: true,
				token: payload,
				isError: false,
			};
		case types.LOGIN_FAILURE:
			return { ...state, isLoading: false, isError: false };

		default:
			return state;
	}
};
