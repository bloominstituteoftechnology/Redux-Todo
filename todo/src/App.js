import React, { Component } from 'react';
import AddToList from './containers/AddToList';
import VisibleList from './containers/VisibleList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddToList />
        <VisibleList />
      </div>
    );
  }
}

export default App
