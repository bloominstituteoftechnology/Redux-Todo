import React, { Component } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoDisplay from "./components/TodoDisplay";

// import { addTodo } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TodoForm addTodo={addTodo} /> */}
        <TodoForm />
        <TodoDisplay />
      </div>
    );
  }
}

export default App;
