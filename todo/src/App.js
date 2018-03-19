import React, { Component } from 'react';
import ToDoList from './containers/toDoList'
import { addToDo } from './actions';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="title">To Do List</div>
        <div className="input">
          <input type="text"></input>
          <button type="submit" onClick={() => this.props.addToDo()}>Add</button>
        </div>
        <div className="list"><ToDoList /></div>
      </div>
    );
  }
}



export default App;
