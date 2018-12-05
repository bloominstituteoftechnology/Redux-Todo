import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
class App extends Component {




  render() {
    return (
      <div className="App">
        <header className="App-header">
         <p>This is nice looking. Let's try to put some stuff in here.</p>
         <TodoForm />
        </header>
      </div>
    );
  }
}

export default App;
