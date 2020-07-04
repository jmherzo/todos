import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

export default todoApp;
