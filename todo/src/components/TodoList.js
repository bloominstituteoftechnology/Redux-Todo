import React, { Component } from "react";
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {

  render () {
    return (
      <div className='todoList'>
        <ul>
          {this.props.todos.map( (todo) => {
            return (
              <Todo 
                key={todo.id} 
                id={todo.id} 
                value={todo.value} 
                completed={todo.completed}  
              />
            );
          })}
        </ul>
        <TodoForm />
      </div>
    );
  }
};

// mapStateToProps so that we have the information needed from the Store
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(TodoList);