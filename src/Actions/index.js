import { v4 } from "node-uuid";
import * as api from '../Api';
import { getIsFetching } from "../Reducers";

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });
  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const toggleTodo = id => ({
  type: "TOOGLE_TODO",
  id
});

export const addTodo = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});
