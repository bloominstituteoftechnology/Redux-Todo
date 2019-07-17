import React from 'react';
import Todo from './Todo'
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
