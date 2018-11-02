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
  const uncompleted = state.todos.filter(item => !item.complete)
  return {
    length: uncompleted.length
  };
};

export default connect(mapStateToProps)(TodoHeader);
