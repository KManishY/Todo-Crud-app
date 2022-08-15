import {
	applyMiddleware,
	compose,
	combineReducers,
	legacy_createStore,
} from "redux";

import thunk from "redux-thunk";

import { reducer } from "./AppReducer/reducer";
import { arrReducer } from "./AppReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	reducer,
	arrReducer,
});

export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
