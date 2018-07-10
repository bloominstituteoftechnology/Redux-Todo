import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addHandler } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <ol>
          {this.props.todos.map((todo, index) => <li key={index}>{todo.value}</li>)}
        </ol>
        <form onSubmit = {(e) => {
            e.preventDefault();
            this.props.addHandler(this.input.value);
            this.input.value = '';
          }}>
          <input ref={node => this.input=node} type="text" placeholder="...new todo"/>
          <button onClick ={(e) => {
            e.preventDefault();
            this.props.addHandler(this.input.value);
            this.input.value = '';
          }}>Submit</button>
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

export default connect(mapStateToProps, { addHandler })(App);
