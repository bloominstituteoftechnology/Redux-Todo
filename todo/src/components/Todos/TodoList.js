import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';

const TodoList = props => {

  return (
    <div>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} /> 
      ))}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    todos: state,
  }
}

export default connect(mapStateToProps)(TodoList);