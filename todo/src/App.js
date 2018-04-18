import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { TodoList } from './components';


export class App extends Component {



  render() {
    let value;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jeffrey's Todo List</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state });
export default connect(mapStateToProps, {  })(App);