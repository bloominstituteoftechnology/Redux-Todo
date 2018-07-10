import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, markDone, handleInput } from './actions';
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
        <AddToDoForm
          addTodo={this.props.addTodo}
          handleInput={this.props.handleInput}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    addTodo: state.addTodo,
    markDone: state.markDone,
    handleInput: state.handleInput,
  };
};

export default connect(
  mapStateToProps,
  { addTodo, markDone, handleInput },
)(App);
