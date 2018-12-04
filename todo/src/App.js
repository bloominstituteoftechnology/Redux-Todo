import React from 'react';

import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Redux ToDo List</h1>
        <TodoForm text={this.props.text}/>
        <TodoList taskName={this.props.taskName}/>
      </div>
    );
  }
}

export default App;
