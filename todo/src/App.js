import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
    return (
      <div className="App">
        <h1>Todo List!</h1>
        <TodoList />
        <AddTodo />
      </div>
    );
}

export default App;
