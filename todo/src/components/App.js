import React, { Component } from 'react';
import '../App.css';
import AddTodoForm from '../containers/AddTodoForm';
import VisibleTodoList from '../containers/DisplayTodoList';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My ToDo List</h2>
        </div>
        <AddTodoForm/>
        <VisibleTodoList/>
        <Filter/>
      </div>
    );
  }
}

export default App;