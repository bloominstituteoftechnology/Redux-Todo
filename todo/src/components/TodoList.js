import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { addTodo, toggleCompleted } from '../actions';

import '../App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="todo">
        <h1 className="todo-title">Todo List</h1>
        <form className="todo-form">
          <input
            className="todo-input"
            placeholder="What do you need to do?"
            value={this.state.inputValue}
            onChange={this.onChange}
          />
          <button
            className="todo-button"
            type="submit"
            onClick={event => {
              event.preventDefault();
              this.props.addTodo(this.state.inputValue);
              this.setState({ inputValue: '' });
            }}
          >
            Add
          </button>
        </form>
        <ul className="todo-list">
          <Todo
            todos={this.props.todos}
            toggleCompleted={this.props.toggleCompleted}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted }
)(TodoList);
