import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = () => {
    const { todoText } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newTodo);
    this.setState({ todoText: '' });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.props.name}</h1>
        </header>
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoText={this.state.todoText}
          addTodo={this.addTodo}
        />
        <div className="App-intro">
          <Todos todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  };
};

export default connect(mapStateToProps, { addTodo })(App);
