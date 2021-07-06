import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='app-title'>
          <h2>Redux Todo Application</h2>
        </div>
        <div className='todolist-container'>
          <Todo />
        </div>        
      </div>
    );
  }
}

export default App;
