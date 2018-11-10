import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { addTodo } from './actions/index';
import { deleteTodos } from './actions/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  deleteTodos(e) {
    this.props.deleteTodos({
      newTodo: e.target.value
    });
  }

  render() {
    return (
      <div className='App'>
      <form onSubmit={this.addTodo}>
        <input
        onChange={this.updateNewTodo}
        placeholder='Add Todo'
        value={this.state.newTodo}
        />
      </form>
      <button onClick={this.addTodo}>Add todo</button>
      <button onClick={this.deleteTodos}>Delete Todo</button>
      <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);