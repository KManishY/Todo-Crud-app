import {
	applyMiddleware,
	compose,
	combineReducers,
	legacy_createStore,
} from "redux";

import thunk from "redux-thunk";

import { reducer as appReducer } from "./AppReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	appReducer,
});

export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
