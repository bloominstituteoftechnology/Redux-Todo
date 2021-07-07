import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTask: ''
    }
  }

  handleInputText = event => {
    this.setState({ todoTask: event.target.value })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}


export default App;
