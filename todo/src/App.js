import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addHandler, completeTodo, deleteTodo } from './actions';

class App extends Component {

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addHandler(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>

        <ul>
          {this.props.todos.map((todo, index) =>
          (<div key={index}>
            <li
              id={index}
              onClick={() => {
                this.props.completeTodo(index)
                document.getElementById(index).style.textDecoration = this.props.todos[index].completed ? 'line-through' : null;
              }}>
              {todo.value}
            </li>
            <button onClick={() => this.props.deleteTodo(index)}>Delete</button>
          </div>
          ))}
        </ul>

        <form onSubmit={(e) => this.formSubmitHandler(e)}>
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
  console.log(state.todos);
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addHandler, completeTodo, deleteTodo })(App);
