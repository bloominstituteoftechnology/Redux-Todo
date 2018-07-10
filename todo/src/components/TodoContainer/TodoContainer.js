import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoContainer = props => {
  console.log("TODO CONTAINER PROPS", props);
  return (
    <div>
      <div>TODO CONTAINER</div>
      {props.todos.map(todo => {
        return <Todo key={todo.value} todo={todo.value} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("STATE IN TODO CONTAINER", state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoContainer);
