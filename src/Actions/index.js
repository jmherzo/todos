import { v4 } from "node-uuid";
import * as api from '../Api';

const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const fetchTodos = (filter) => api.fetchTodos(filter).then(response => (
  receiveTodos(filter, response)
));

export const toggleTodo = id => ({
  type: "TOOGLE_TODO",
  id
});

export const addTodo = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});
