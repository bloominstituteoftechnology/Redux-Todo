import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { addTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  addTodoChange = () => {
    const todos = this.state.todos.slice();
    todos.push({
      id: this.props.todos.length + 1,
      value: this.state.inputText,
      completed: false
    });
    this.setState({ todos, inputText: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Todos todos={this.props.todos} />
        <TodoForm 
          inputText={this.state.inputText}
          handleInput={this.handleInputChange}
          addTodo={this.addTodoChange}
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

export default connect(mapStateToProps, {addTodo})(App);