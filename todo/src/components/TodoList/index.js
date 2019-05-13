import React from 'react';
import Todo from '../Todo';
import { connect } from 'react-redux';
import { toggleComplete } from '../../actions';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleComplete(todo.id)} />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

// export default TodoList;

export default connect(
  mapStateToProps,
  { toggleComplete }
)(TodoList);
