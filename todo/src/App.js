import React from 'react';
import Todo from './components/Todo'

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Todo />
      </div>
    );
  }
}
