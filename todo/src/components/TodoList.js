import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleComplete, deleteTodo } from '../actions';

const TodoList = props => {
  return (
    <div className='todo-list'>
  {props.todos.map((todo, index) => (
      <Todo todo={todo} key={index} id={index} toggleComplete={props.toggleComplete} delete={props.deleteTodo} />
    ))}
  </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo }
)(TodoList)
