import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { toggleTodo, removeTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onTodoClick={toggleTodo}
          onTodoRemove={removeTodo}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(
  mapStateToProps,
  { toggleTodo, removeTodo }
)(TodoList);
