import React, { Component } from 'react';
import logo from './logo.svg';
import FontAwesome from 'react-fontawesome'
import TODOLIST from './component/Todolist'
import FORM from './component/Form'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faEnvelope, faKey, faTrashAlt,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faPlusCircle, faTrashAlt,faCheckCircle );


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Welcome , What is your main focus for today?</h2>
        <div>
       
  
  
        </div>
        <FORM />
        <TODOLIST />
         
        </header>
        
        
      </div>
    );
  }
}

export default App;
