import React from 'react';

const Todo = props => {
  const onClick= (event) => {
    props.toggleComplete(props.id);
  }

  const deleteTodo = (event) => {
    event.stopPropagation();
    props.delete(props.id)
  }

  const toggleUrgent = (event) => {
    props.urgent(props.id);
  }

  return (
    <div className='todo'>
      <div className={props.todo.urgent ?  'marker urgent' : 'marker'}
        onClick={toggleUrgent}><i className="fas fa-exclamation"/></div>
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
