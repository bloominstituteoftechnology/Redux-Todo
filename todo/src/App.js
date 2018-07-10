import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addHandler, completeTodo } from './actions';

class App extends Component {

  formSubmitHandler = (e, input) => {
    e.preventDefault();
    this.props.addHandler(input.value);
    input.value = '';
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>

        <ul>
          {this.props.todos.map((todo, index) =>
            <li
              key={index}
              id={index}
              onClick={() => {
                this.props.completeTodo(index)
                document.getElementById(index).style.textDecoration = this.props.todos[index].completed ? 'line-through' : null;
              }}>
              {todo.value}
            </li>)}
        </ul>

        <form onSubmit={(e) => this.formSubmitHandler(e, this.input)}>
          <input
            ref={node => this.input = node}
            type="text"
            placeholder="...new todo"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addHandler, completeTodo })(App);
