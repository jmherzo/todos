import React from "react";
import Footer from "./Footer";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;