import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

export const AddTodo = () => {
  let input;
  return (
    <div>
      <form onSubmit={event => {
        if (!input.value.trim()) {
          return;
        } else {
          this.store.dispatch(addTodo(input.value));
          input.value = "";
        }
      }}>
        <input 
          ref={node => input = node}
          placeholder="add task to list"
        />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export const ToDoS = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />)}
    </div>
  )
}

export const Todo = ({ onClick, completed, text }) => {
  return (
    <div onClick={onClick} style={{textDecoration: completed ? "line-through" : "none"}}>
      {text}
    </div>
  )
}

connect()(AddTodo);
connect()(ToDoS);
