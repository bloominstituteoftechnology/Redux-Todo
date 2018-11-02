import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todosarray from './Todosarray';
import Todosarraydisplay from './Todosarraydisplay';

import TodosList from './containers/TodosList';
import TodoDetail from './containers/TodoDetail';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Generic Todo Item'
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Redux Todo App:
          </p>
          <div>
              {this.state.text}
          </div>

        </header>



        <h1><TodoDetail /></h1>
        <TodosList />
        
      </div>
    );
  }
}

export default App;

// create a basic todo app WITHOUT Redux first,
// then go through steps that Dan went through in creating sandbox to ADD Redux files
// initially, ignore what you did last night, THEN merge
