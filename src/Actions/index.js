import { v4 } from "node-uuid";

export const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const toggleTodo = id => ({
  type: "TOOGLE_TODO",
  id
});

export const addTodo = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});
