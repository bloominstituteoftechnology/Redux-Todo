import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = props => {
  const { id, todo, handleClickTodo } = props;
  return (
    <div>
      <input
        name={id}
        type="checkbox"
        value={todo.value}
        checked={todo.completed}
        onChange={() => handleClickTodo(id)}
      />
      <div htmlFor={id}>{todo.value}</div>
    </div>
  );
};

const TodoList = props => {
  const handleClickTodo = index => {
    props.toggleTodo(index);
  };

  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo
          key={index}
          id={index}
          todo={todo}
          handleClickTodo={handleClickTodo}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);
