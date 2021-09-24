import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initState = {};
const middleware = [thunk];
const reducer = combineReducers(rootReducer);

export type RootState = ReturnType<typeof reducer>;
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null;
const store = createStore(
  reducer,
  initState,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

export default store;
