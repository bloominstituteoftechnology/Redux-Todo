import React, { Component } from 'react';
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import './App.css';

class App extends Component {

    render() {
      return (
        <div className="App">
          < ToDo />
          < ToDoList />
        </div>
      );
    }
  }

export default App;
