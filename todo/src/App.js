import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <input placeholder='... to-do'></input>
        <button>Add To-do</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
