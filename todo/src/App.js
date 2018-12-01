import React, { Component } from 'react';

import TodoSubmitter from './TodoSubmitter'
import './App.css';

class App extends Component {
  
  

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            What would you like to do today?</p>
               <p>  input field goes here
            add to list button goes here</p>
           <p> todo list goes here</p>
           <TodoSubmitter />
            
              
          
          
          
        </header>
      </div>
    );
  }
}

export default App;