import React, { createContext } from 'react';

import './App.css';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import initialState from './initialState.json'


export const TodoContext = createContext(null)

function App(props) {

  
  return (
    <div className="App">
      <h2>Yet Another "Todo List" App</h2>
      <TodoContext.Provider value={initialState.todos}>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
