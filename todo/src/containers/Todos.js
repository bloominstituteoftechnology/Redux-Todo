import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  removeCompletedTodos
} from '../actions';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddTodo = () => {
    const todo = {
      title: this.state.title,
      completed: false,
      id: Date.now()
    };
    console.log('inside of Todos, adding:', todo);
    this.props.addTodo(todo);
    this.setState({ title: '' });
  };

  handleToggle = id => {
    this.props.toggleTodo(id);
  };

  handleRemoveCompleted = id => {
    this.props.removeCompletedTodos();
  };

  handleRemove = id => {
    this.props.removeTodo(id);
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <button onClick={this.handleRemoveCompleted}>Remove Completed</button>
        {todos.map(item => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>Completed: {item.completed.toString()}</div>
              <button onClick={() => this.handleToggle(item.id)}>
                Complete
              </button>
              <button onClick={() => this.handleRemove(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo, removeCompletedTodos }
)(Todos);
