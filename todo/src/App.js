import React, { Component } from 'react';
import './App.css';
import store from './store/configureStore'
import List from './List';


class App extends React.Component {
  constructor (props) {
    super(props)

    this.state =  {
      todos: [{
        task: 'Walk Dog',
        completed: false
      }]
    }
  }


  render() {
    return (
      <div className="App">
        <h1>To Do</h1>
        <List items = {this.state.todos} />
      </div>
    );
  }
}

export default App;
