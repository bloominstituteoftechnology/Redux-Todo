import React, { createContext, useReducer } from 'react';

import './App.css';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import rootReducer from './store/reducers'
import initialState from './initialState.json'


export const TodoContext = createContext(null)

function App(props) {
  const [todos, dispatchTodos] = useReducer(rootReducer, initialState)
  
  return (
    <div className="App">
      <h2>Yet Another "Todo List" App</h2>
      <TodoContext.Provider value={initialState}>
        <TodoForm dispatch={dispatchTodos} />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
