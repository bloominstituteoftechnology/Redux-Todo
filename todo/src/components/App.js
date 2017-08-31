import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { add, update } from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.add(e.target.input.value);
        e.target.input.value = '';
      }
        }>
        <input type="text" name="input"/>
      </form>
    </div>
  )
  }
}

const mapStateToProps =(state) => {
  return {
    todos: state.todos,
    input: state.input,
  }
};
export default connect(mapStateToProps, {add, update})(App);
