import React from "react";
import { connect } from "react-redux";

function TodoForm() {
  return (
    <div className="todoform">
      <input type="text" placeholder="new todo here" />
      <button>Add Todo</button>
    </div>
  );
}

export default connect(
  null,
  {}
)(TodoForm);
