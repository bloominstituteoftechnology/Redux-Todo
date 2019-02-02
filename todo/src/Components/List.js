import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

function List(props) {
  return (
    <div className="list">
      {props.todos.map(entry => (
        <Todo
          entry={entry.todo}
          complete={entry.complete}
          key={entry.id}
          id={entry.id}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(List);
