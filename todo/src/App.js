import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions/actions';
class App extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.todos.value}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      todos: state
  };
};
export default connect(mapStateToProps, { addTodo, toggleTodo })(App)

App;
