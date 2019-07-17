import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
