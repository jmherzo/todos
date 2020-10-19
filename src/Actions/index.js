import { v4 } from "node-uuid";
import * as api from '../Api';
import { getIsFetching } from "../Reducers";

const requestTodos = (filter) => ({
  type: "REQUEST_TODOS",
  filter
});

const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch(requestTodos(filter));
  return api.fetchTodos(filter).then(response => (
    dispatch(receiveTodos(filter, response))
  ));
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
