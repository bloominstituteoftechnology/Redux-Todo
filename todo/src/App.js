import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer'

class App extends Component {
 constructor(){
  super()

  this.state = {
   
  }
 }
  render() {
    return (
      <div className="App">
      <form>
       <input />
       <button>

       </button>
      </form>
      <TodoContainer />
      </div>
    );
  }
}

export default App;
