import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { add_todo, handle_input } from './Actions/Actions';

class App extends Component {
  handleInputChange = event => {
    this.props.handle_input(event.target.value);
  }

  render() {
    let handleInput;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do List</h1>
        </header>
          <div>
            <input
            type="text"
            placeholder="add to-dos"
            name="todo"
            value = {this.handleInput}
            onChange= {this.handleInputChange} />
            <button onClick={() => this.props.add_todo()}> Add To List </button>
          </div>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { add_todo }) (App);
