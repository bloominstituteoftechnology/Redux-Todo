import React from 'react';
import { connect } from 'react-redux';
import { handleInput, addTodo, clearCompletedTodos } from '../actions';

class TodoForm extends React.Component {
  handleChange = e => {
    this.props.handleInput(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo();
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.clearCompletedTodos();
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.props.input}/>
        <button onClick={this.handleSubmit}>Add todo</button>
        <button onClick={this.handleDelete}>Delete</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    input: state.input
  }
}

export default connect(mapStateToProps, { handleInput, addTodo, clearCompletedTodos })(TodoForm);
