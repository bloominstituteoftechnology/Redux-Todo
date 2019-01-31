import React, { Component } from 'react';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import { Route } from 'react-router-dom';

import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ToDoForm} />
        <Route exact path='/list' component={ToDoList} />
      </div>
    );
  }
}

export default App;
