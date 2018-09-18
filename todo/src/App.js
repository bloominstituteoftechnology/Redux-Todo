import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class App extends Component {
  render() {
    return <TodoList todo={this.state.todos} />;
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.

const mapStateToProps = state => {
  return {
    todo: state,
    completed: state,
    key: state
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
