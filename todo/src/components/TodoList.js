import React from "react";
import { connect } from "react-redux";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
