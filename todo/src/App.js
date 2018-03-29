import React, { Component } from 'react';
import TodoList from './components/toDoList'
import { VaporLook } from './Components/VaporLook';


class App extends Component {
  render() {
    return (
      <div>
        <VaporLook />
        <TodoList />
      </div>
    );
  }
}

export default App;