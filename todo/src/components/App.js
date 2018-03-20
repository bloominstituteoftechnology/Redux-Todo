import React from 'react';
import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodoList';
import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App;
