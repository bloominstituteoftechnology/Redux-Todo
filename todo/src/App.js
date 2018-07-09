import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Start your morning routine</h2>
        <h4>And add to your todo list</h4>
      </header>
      <TodoList />
    </div>
  );
}
}

export default App;
