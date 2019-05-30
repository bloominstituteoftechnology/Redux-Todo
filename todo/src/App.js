import React from 'react';

// import { Component } from 'react'

import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from './actions/index'


class App extends React.Component {
  state = {
    task: ''
  }


  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onButtonClick = () => {
    if (this.state.task) {
      this.props.addTodo(this.state.task)
      this.setState({
        task: ''
      })
    }
  }

  toggleCompleted = (event, index) => {
    event.preventDefault();
    this.props.toggleCompleted(index);
  };

  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        {this.props.todos.map((todo, index) =>
          <h3
            key={index}
            className={todo.completed ? 'complete' : ''}
            onClick={event => this.toggleCompleted(event, index)}
          >
            {todo.value}
          </h3>
        )}
        <input
          name='task'
          onChange={this.onInputChange}
          value={this.state.task}
          placeholder="Add new ToDo..."
        />
        <button onClick={this.onButtonClick}>Add New Todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo, toggleCompleted })(App);

