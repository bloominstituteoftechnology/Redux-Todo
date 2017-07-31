import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListMain from './TodoListMain';

const ShowTodo = (props) => {
   
    return (
     <div>
      <h3>Todo List</h3>
        <ol>
          {
            
            props.todos.todos.map(todo => {
            return <li onClick={props.toggle} key={todo.id}>{todo.value}</li>
      })
          }
        </ol>
     </div>
    )
};

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps)(ShowTodo);