import React from 'react';
import InputForm from './containers/InputForm';
import TodoList from './containers/TodoList';

const App = () => {
  return (
    <div className="App">
      <h1 className="App-title">Redux Todo List</h1>
      <InputForm />
      <TodoList />
    </div>
  );
};

export default App;
