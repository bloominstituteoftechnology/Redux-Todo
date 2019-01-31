import React from 'react';
import { toggleTodo, deleteTodo } from './../actions';

import { connect } from 'react-redux';

const Todo = props => {
  return (
    <div>
      <div 
        onClick={() => {props.toggleTodo(props.todo.id)}}
        className={props.todo.complete ? "completed" : null}
      >
        {props.todo.text} 
      </div>
      <span onClick={() => {props.deleteTodo(props.todo.id)}} >X</span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(Todo);