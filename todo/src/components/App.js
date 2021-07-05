import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { submitTodo, toggleTodo, removeTodo, getTodos } from '../actions/actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newText: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ newText: event.target.value });
  }

  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  }

  handleTodoSubmit = () => {
    const text = this.state.newText;
    console.log('text ',text);
    const newTodo = {
      text,
      completed: false,
      id: this.props.todos ? this.props.todos.length + text : 0 + text
    };
    this.props.submitTodo(newTodo);
    this.setState({ newText: ''});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Redux Todo App</h1>
        </header>
        <div className='todo-list'>
          {this.props.todos.map((todo) => {
            return (
              <div key={todo.id} className='todo-item'>
                <p onClick={() => this.handleToggleTodo(todo.id)}
                  style={todo.completed ? {textDecoration: 'line-through'} : null}>
                  {todo.text}
                </p>
                <button onClick={() => {this.props.removeTodo(todo.id)}}>Delete</button>
              </div>)
          })}
        </div>

        <div className='input-container'>
          <input className='input' onKeyPress={e => {if (e.charCode === 13) this.handleTodoSubmit() }} placeholder='Enter new item' value={this.state.newText} onChange={this.handleInputChange} />
          <button className='submit' onClick={ this.handleTodoSubmit }>Submit</button>
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

export default connect(mapStateToProps, { submitTodo, toggleTodo, removeTodo, getTodos })(App);
