import React from 'react';
import TodoList from "./TodoList";
import TodoForm from './TodoForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">

<TodoList />
<TodoForm />
      </div>
    );
  }
}

export default App;