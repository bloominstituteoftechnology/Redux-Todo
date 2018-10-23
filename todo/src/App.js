import React, { Component } from 'react';
import Footer from '../src/Components/TodoList/Footer'
import AddTodo from '../src/Components/containers/AddTodo'
import VisibleTodoList from '../src/Components/containers/VisibleTodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
