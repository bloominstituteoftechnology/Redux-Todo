// Inport React
import React, { Component } from 'react';
// Inport List View
import List from './components/List';
// Inport List Input
import ListInput from './components/ListInput';
// Import List View
import ListItem from './components/ListItem';
// Inport Visual Elements
// import logo from './logo.svg';
// Inport CSS
import './App.css';

// The export of this is being wrapped in redux, so we don't do any reduxing here.
// So we don't have to pass props from here like we normally would.  Only components
// That need data will ask for it within their store instead of waterfalling the data.
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux list</h1>
        </header>
        <List />
        <ListInput />
      </div>
    );
  }
}

export default App;
