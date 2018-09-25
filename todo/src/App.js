import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleAddTodoSubmit = event => {
    event.preventDefault();
    
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Todos todos={this.props.todos} />
        <TodoForm 
          inputText={this.state.inputText}
          handleInput={this.handleInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);