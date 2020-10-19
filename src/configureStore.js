import todoApp from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
