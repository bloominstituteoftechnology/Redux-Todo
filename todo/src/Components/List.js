import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

function List(props) {
  return (
    <div className="list">
      {props.todos.map(entry => (
        <Todo entry={entry.todo} id={entry.todo} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(List);
