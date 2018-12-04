import React from 'react';
import { connect } from 'react-redux';

import {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleStatus,
} from '../actions';

import TodoForm from './TodoForm';

class TodoList extends React.Component {
  render() { 
    return (
      <div>
        Todo App
        {
          this.props.todos.map((todo,id) => (
            <div
              key={id}
            >
              {todo.value}
            </div>
          ))
        }
        <TodoForm handleSubmit={this.props.addTodo}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

export default connect(
  mapStateToProps,
  {
    addTodo,
    updateTodo,
    deleteTodo,
    toggleStatus,
  })(TodoList);
