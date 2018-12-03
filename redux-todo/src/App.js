import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList list={this.props.items} />
      </div>
    );
  }
}

const stateToProps = state => {

  return {

    items: state.todos

  }

};

export default connect(stateToProps, {})(App);
