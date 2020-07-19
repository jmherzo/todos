import todoApp from "./Reducers";
import { createStore } from "redux";

const logging = store => next => {
  if (!console.group) {
    return next;
  }
  console.log("Logging Middleware");
  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const promise = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  });
};

const configureStore = () => {
  const middlewares = [promise];
  const store = createStore(todoApp);
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logging);
  }
  wrapDispatchWithMiddlewares(store, middlewares);
  return store;
};

export default configureStore;
