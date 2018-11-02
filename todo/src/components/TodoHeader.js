import React from "react";
import { connect } from "react-redux";

const TodoHeader = props => {
  return (
    <div>
      <h1>Michael's Todo List</h1>
      <p>
        You have <span>{props.length}</span> todos open right now.
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    length: state.todos.length
  };
};

export default connect(mapStateToProps)(TodoHeader);
