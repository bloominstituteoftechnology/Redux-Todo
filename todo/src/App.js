import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>Hi this is your todo list</h1>
        </header>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo }) (App);
