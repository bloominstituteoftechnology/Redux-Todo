import React, { Component } from 'react';
import './App.css';
import ListofTodos from './components/ListofTodos';
// import { connect } from 'react-redux'; // HOC!!!!

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to the To-Do Redux App</p>
          <ListofTodos />
        </header>
      </div>
    );
  }
}

export default App;
