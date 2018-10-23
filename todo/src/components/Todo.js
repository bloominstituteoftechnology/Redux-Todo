import React from 'react';
import { connect } from 'react-redux';

const Todo = props => {
  const onClick= (event) => {
    props.toggleComplete(props.id);
  }

  const deleteTodo = (event) => {
    event.stopPropagation();
    props.delete(props.id)
  }

  return (
    <div className='todo'>
      <p className={props.todo.completed ? 'done' : null} onClick={onClick}>
        {props.todo.value}</p>
      <div className='delete-todo'
        onClick={deleteTodo}>
        <i className="far fa-times-circle"/>
      </div>
    </div>
  )
}
export default Todo;
