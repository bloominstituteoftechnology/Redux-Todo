import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markDone } from './actions';
import Todo from './components/Todo';
import AddToDoForm from './components/AddToDoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.todos.map((todo, i) => (
          <Todo todo={todo} markDone={this.props.markDone} key={i} />
        ))}
        <AddToDoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    markDone: state.markDone,
  };
};

export default connect(
  mapStateToProps,
  { markDone },
)(App);
