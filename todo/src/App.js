import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => (
  <div className="App">
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
