import { connect } from "react-redux";
import { toggleTodo } from "../Actions";
import TodoList from "./TodoList";

const setFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_ALL":
      return todos;
    default:
      return todos;
  }
};

const mapStateTodoListToProps = state => {
  return {
    todos: setFilter(state.todos, state.visibilityFilter)
  };
};
const mapDispatchTodoListToProps = dispatch => {
  return {
    onClickTodo: id => dispatch(toggleTodo(id))
  };
};
const VisibleTodoList = connect(
  mapStateTodoListToProps,
  mapDispatchTodoListToProps
)(TodoList);

export default VisibleTodoList;
