import React from 'react';
import Todo from '../Todo';
import { connect } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../actions';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        // toggleComplete={() => toggleComplete(todo.id)}
        // deleteTodo={() => deleteTodo(todo.id)}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo }
)(TodoList);
