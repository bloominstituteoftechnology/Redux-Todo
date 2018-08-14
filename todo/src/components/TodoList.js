import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo, removeTodo } from '../actions/actions';

const TodoList = ({todos, toggleTodo, removeTodo}) => {
  return(
    <ul style={{listStyle: 'none'}}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          toggle={() => toggleTodo(todo.id)}
          remove={() => removeTodo(todo.id)}
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
export default connect(mapStateToProps, { toggleTodo, removeTodo })(TodoList);