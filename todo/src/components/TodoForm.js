import React from "react";
import { connect } from "react-redux";
import { add } from "./../actions/actions";

function TodoForm() {
  return (
    <div className="todo-form">
      <input type="text" placeholder="new todo here" />
      <button onClick={this.addTodo}>Add Todo</button>
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
  { addTodo }
)(TodoForm);
