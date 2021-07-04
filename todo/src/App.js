import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './actions/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  adding = (e) => {
    actions.addTodo({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1> Todo but with Redux</h1>
        
        <form>
        <input
        type='text'
        placeholder='add todo'
        name='todo'
        autoComplete='off'
        value={this.state.todo}
        onChange={this.adding}
        />
        <button>Add</button>
        </form>
        <h2>{todos.map((todo, index) => {
          return <div key={index}>{todo}</div>
        })}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(
  mapStateToProps,
  actions
)(App);
