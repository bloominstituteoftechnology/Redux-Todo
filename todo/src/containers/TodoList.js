import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo  } from '../actions';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <div key={todo.id}>
                <li>{todo.value}</li>
                <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
        <input
          type="text"
          value={this.state.value}
          placeholder="add new todo"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }

  handleDeleteTodo = e => {
    e.preventDefault();
    console.log(this.props);
  }

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  };
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, { addTodo })(TodoList);
