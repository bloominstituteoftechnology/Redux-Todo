import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './Components/TodoList';

import './App.css';

function App(props) {
  const [todo, setTodo] = useState('');

  const submitTodoHandler = e => {
    e.preventDefault();
    props.addTodo({
      value: todo,
      completed: false
    });
    setTodo('');
  };

  return (
    <div className="App">
      <h2>Redux Todo List</h2>
      <form className="todo-list-form" onSubmit={e => submitTodoHandler(e)}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">Add a Todo</button>
      </form>
      <TodoList />
    </div>
  );
}

export default connect(
  null,
  { addTodo }
)(App);
