import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({todos}) => {
  return(
    <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps)(TodoList);
