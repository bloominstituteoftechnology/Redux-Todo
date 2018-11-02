import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
        <div>The to do list will appear here</div>
        <ToDoList />
      </div>
    );
  }
}

export default App;

//input handler will set the state with the input setting to state for value
// on submit, will create object in todos array {...todos} that has the value and completed set to false
//todo container will map over todos array to create items
//on click, completed value will be set to opposite.
// on click, the clear completed will remove completed items from todos array
