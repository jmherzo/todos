import { v4 } from "node-uuid";

export const toggleTodo = id => ({
  type: "TOOGLE_TODO",
  id
});

export const addTodo = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});
