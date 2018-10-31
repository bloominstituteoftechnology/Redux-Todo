import React from 'react';
import TodoListContainer from './components/TodoListContainer';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>{this.props.name}'s Todo List</h1>
        </header>
        <TodoListContainer />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: 'Kat'
  };
};


export default connect(mapStateToProps)(App);