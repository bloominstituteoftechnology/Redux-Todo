import React, { Component } from 'react';
import './App.css';
import { store } from './index';


import TodoContainer from './components/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TO DO List</h1>
        <TodoContainer todos={store.getState().todos}/>
      </div>
    );
  }
}

export default App;
