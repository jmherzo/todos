import todoApp from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
