import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';




const TodoList = props => {
  return (
    <div className='todo-list'>
  {props.todos.map((todo) => (
      <Todo todo={todo} key={todo.id}  />
    ))}
  </div>
  )
}
// export default TodoList;

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  {}
)(TodoList)
