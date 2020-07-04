import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onClickTodo }) => (
  <ul>
    {todos.map((todo, i) => (
      <Todo
        todo={todo}
        key={`${i}_${todo.id}`}
        onClick={() => onClickTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
