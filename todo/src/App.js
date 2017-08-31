import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import TodoListDetail from './TodoListDetails';
import './App.css';

class App extends Component {
  render() {
    console.log('Wow, ths is kinda cool!')
    return (
      <div className="App"><hr/>
       <h4>REDUX IS AMAZING</h4>
        <hr />
        <TodoList />
        <hr/>
        <TodoListDetail />
      </div>
    );
  }
}

export default App;
