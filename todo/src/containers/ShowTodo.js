import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListMain from './TodoListMain';

const ShowTodo = (props) => {
   
    return (
     <div>
      <h1>Todo List</h1>
        <hr />
        <ul>
          {
            
            props.todos.todos.map(todo => {
            return <li value={todo.id} onClick={props.toggle} key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.id}. {todo.value}</li>
      })
          }
        </ul>
     </div>
    )
};

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps)(ShowTodo);
