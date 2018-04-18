import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions/actions';

const strikethrough = { textDecoration: "line-through" };

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.todoInput);
    this.setState({ todoInput: "" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jeffrey's Todo List</h1>
        </header>
        <div>
          <input 
            type="text"
            placeholder="add todo task"
            onChange={this.handleInputChange}
            name="todoInput"
            value={this.state.todoInput}
          />
          <button onClick={() => this.handleAddTodo()}>add</button>
        </div>
        {this.props.todos.map((todo, index) => (
          <div 
            key={index} 
            onClick={() => this.props.toggleTodo(todo.id)}
            style={todo.complete ? strikethrough : null}
          >
            {todo.todo}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    todos: state
  }
};
export default connect(mapStateToProps, { addTodo, toggleTodo })(App);