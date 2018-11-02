import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let todo = ['Ready','Set', 'Go']
class App extends Component {
  render() {
    return (
      <div className="App">
          {todo.map(item => {return <ul> <li><form> <input type='checkbox'></input></form></li> 
          <h2>{item}</h2></ul>})}
          Daily Tasks:<form><input type='text'></input></form>
      </div>
    );
  }
}

export default App;
