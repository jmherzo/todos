import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../Actions";
import TodoList from "./TodoList";
import { getVisibleTodos, getIsFetching } from "../Reducers";
import React, { Component } from "react";

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos, requestTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    return <TodoList todos={todos} onClickTodo={toggleTodo} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || "all";
  return {
    //  this are the props we are passing to the TodoList component
    filter,
    isFetching: getIsFetching(state, filter),
    todos: getVisibleTodos(state, filter)
  };
};

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleTodoList)
);

export default VisibleTodoList;
