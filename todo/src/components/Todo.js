import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete, deleteTodo } from '../actions';



const Todo = props => {
  const onClick= (event) => props.toggleComplete(props.id);

  return (
    <div className='todo'>
      <p className={props.todo.completed ? 'done' : null} onClick={onClick}>
        {props.todo.value}</p>
      <div className='delete-todo'
        onClick={(event) => {
          props.deleteTodo(event, props.id)
        }}>
        <i className="far fa-times-circle"/>
      </div>
    </div>
  )
}
// export default Todo;

const mapStateToProps = state => {
  return {
    // completed: state.completed
  }
}

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo }
)(Todo);
