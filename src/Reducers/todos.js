import { combineReducers } from "redux";
import todo from "./todo";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOOGLE_TODO":
      return { ...state, [action.id]: todo(state[action.id], action) };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});
export default todos;

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, visibilityFilter) => {
  const allTodos = getAllTodos(state);
  switch (visibilityFilter) {
    case "completed":
      return allTodos.filter(todo => todo.completed);
    case "active":
      return allTodos.filter(todo => !todo.completed);
    case "all":
      return allTodos;
    default:
      throw new Error(`Unknown filter ${visibilityFilter}`);
  }
};
