import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete, deleteTodo } from '../actions';


const Todo = props => {
  return (
    <div className='todo'>
      <p className={props.todo.completed ? 'done' : 'todo'} onClick={() => props.toggleComplete(props.todo.value, props.todo.completed, props.id)}>
        {props.todo.value}</p>
      <div className='delete-todo'
        onClick={(event) => {
          props.deleteTodo(event, props.todo.id)
        }}>
        Delete
      </div>
    </div>
  )
}
// export default Todo;

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo }
)(Todo);
