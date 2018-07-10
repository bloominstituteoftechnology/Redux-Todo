import React from 'react';
import './Todo.css';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const Todo = props => {
  return (
    <div className="todo-container">
      <div key={Math.random()}
           onClick={() => props.toggleTodo(props.todo.id)}
           className={props.todo.completed ? "completed" : "uncompleted"}
      >
        {props.number}. {props.todo.value}
      </div>
      <div className="delete" onClick={() => props.deleteTodo(props.todo.id)}>X</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(Todo);
