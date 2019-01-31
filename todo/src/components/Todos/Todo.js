import React from 'react';
import { toggleTodo } from './../actions';

import { connect } from 'react-redux';

const Todo = props => {
  return (
    <div 
      onClick={() => {props.toggleTodo(props.todo.id)}}
      className={props.todo.complete ? "completed" : null}
    >
      {props.todo.text}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { toggleTodo })(Todo);