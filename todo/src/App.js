import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './Header';

import './App.css';

class App extends Component {
 render() {
  return (
   <div>
    <Header />
    <Todo />
   </div>
  );
 }
}

export default App;
