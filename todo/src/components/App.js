import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => (
            <li key={i}>
              {todo}
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

export default connect(mapStateToProps)(App);
