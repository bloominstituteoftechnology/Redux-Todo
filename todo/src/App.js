import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addToDo, removeToDo } from './components/actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.props.todos;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">YOUR TODO LIST!</h1>
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
  }
}

export default connect(mapStateToProps, { addToDo, removeToDo })(App);
