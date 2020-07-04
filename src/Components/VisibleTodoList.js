import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../Actions";
import TodoList from "./TodoList";
import { getVisibleTodos } from "../Reducers";
import { fetchTodos } from "../Api";
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
    const { filter, receiveTodos } = this.props;
    fetchTodos(this.props.filter).then(todos => {
      receiveTodos(filter, todos);
    });
  }

  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onClickTodo={toggleTodo} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || "all";
  return {
    //  this are the props we are passing to the TodoList component
    filter,
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
