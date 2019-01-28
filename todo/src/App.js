import React, { Component } from 'react';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
