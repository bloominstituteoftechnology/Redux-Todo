import React from "react";
import { connect } from 'react-redux'

import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          // toggleCompleted={props.toggleCompleted}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);