import React from 'react';
import TodoListContainer from './components/TodoListContainer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kat's Todo List</h1>
        </header>
        <TodoListContainer />
      </div>
    )
  }
}
export default App;