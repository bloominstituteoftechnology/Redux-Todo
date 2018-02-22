import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './Reducers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h2>Todo App</h2>
        <TodoList />
      </div>
      </Provider>
    );
  }
}

export default App;
