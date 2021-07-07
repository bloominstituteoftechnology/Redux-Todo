import React, { Component } from 'react';
import TodoList from './components/TodoList'; 

class App extends Component {

  render() {
    return (
      <div> 
        <p>Note: When an item is added to the to the todo list you can click on it to to confirm that it was completed</p> 
        <TodoList /> 
      </div> 
    );
  }
}

export default App;
