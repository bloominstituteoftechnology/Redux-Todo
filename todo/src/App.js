import React, { Component } from 'react';
import toDoList from './Components/toDoList'
import { VaporLook } from './Components/VaporLook';


class App extends Component {
  render() {
    return (
      <div>
        <VaporLook />
        <toDoList />
      </div>
    );
  }
}

export default App;