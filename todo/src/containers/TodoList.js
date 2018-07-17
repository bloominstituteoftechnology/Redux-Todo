import React from 'react';
import TodoForm from './TodoForm';
import { addTodo, toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

const TodoList = () => {
  return (
    <div>
      <h1>hi</h1>
      <TodoForm />
    </div>
    );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
 
export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList);