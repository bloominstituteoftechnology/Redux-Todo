import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'; // HOC!!!!
import { addTodo } from '../actions';

const TodoList = props => {
  // handleAddTodo = ev => {
  //   ev.preventDefault();
  //   // this.props.addTodo(this.state.friendText);
  //   console.log(this.state);
  // };

  console.log(props.todos.todos);

  let todos = props.todos.todos;

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoList);
