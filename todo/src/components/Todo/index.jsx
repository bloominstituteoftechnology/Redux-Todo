import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from '../../actions';
import './index.css';

const Todo = props => {
  return (
    <div className="todo-wrapper">
      <div className="todo" key={Math.random()} onClick={() => props.toggleTodo(props.todo.id)} className={props.todo.completed ? "todo complete" : "todo incomplete"}>{props.todo.value}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps, { toggleTodo })(Todo);
