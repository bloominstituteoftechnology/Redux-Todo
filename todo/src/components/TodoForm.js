import React from "react";
import { connect } from "react-redux";

function TodoForm() {
  return (
    <div className="todo-form">
      <input type="text" placeholder="new todo here" />
      <button>Add Todo</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    newTodo: state.newTodo
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoForm);
