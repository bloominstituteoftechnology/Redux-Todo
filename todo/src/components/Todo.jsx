import React from 'react';
import { connect } from 'react-redux';
import { completedToDo } from '../actions/actions';

const Todo = props => {
  return(
    <ul>
      <li onClick={() => props.completedToDo(props.todo.id)}>{props.todo.value}</li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { completedToDo })(Todo)