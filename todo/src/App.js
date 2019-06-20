import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { addTodo } from './actionTypes';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Todo Tracker</h1>
        <TodoList todos={this.props.todos} />
        <form onSubmit={this.addTodo}>
          <input
            name='newTodo'
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder='Add New'
            autoFocus
          />
          <button className='submit-button'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
