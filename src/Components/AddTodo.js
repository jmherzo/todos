import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions";

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <>
      <input
        ref={inputElement => {
          input = inputElement;
        }}
      />
      <button
        onClick={() => {
          if (input.value) {
            dispatch(addTodo(input.value));
          }
          input.value = "";
        }}
      >
        Add todo
      </button>
    </>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
