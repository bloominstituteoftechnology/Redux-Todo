import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { markDone } from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => (
            <li key={i} onClick={() => this.props.markDone(todo.id) }>
              {todo.value}
              {todo.completed}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

export default connect(mapStateToProps, { markDone })(App);
