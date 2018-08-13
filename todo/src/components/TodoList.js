import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions/todos';

const TodoList = ({todos, toggleTodo}) => {
  return(
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
         />
      )}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, { toggleTodo })(TodoList);
