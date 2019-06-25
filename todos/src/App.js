import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from "redux";

import logo from './logo.svg';
import './App.css';
import List from'./List'
import reducer from './reducer';



 function App() {
  return (
    <div className="App">
      <h1>List</h1>
      <List/> 
    </div>
  );
}
 

export default App;
