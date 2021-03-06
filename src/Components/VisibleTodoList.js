import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../Actions";
import TodoList from "./TodoList";
import FetchError from './FetchErrors';
import { getVisibleTodos, getErrorMessage, getIsFetching } from "../Reducers";
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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter).then(() => console.log('finished fetching'));
  }

  render() {
    const { toggleTodo, todos, errorMessage, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return (<FetchError
        message={errorMessage}
        onRetry={() => this.fetchData()}
      />);
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
    errorMessage: getErrorMessage(state, filter),
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
