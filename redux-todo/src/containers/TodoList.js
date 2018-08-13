import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onTodoClick={toggleTodo} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);
