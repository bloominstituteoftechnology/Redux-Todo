import React from 'react';
import './Todo.css';
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
        <input type="text"
               placeholder="what do you need to do?"
               onChange={this.handleChange}
               value={this.props.input}
        />
        <div className="buttons-container">
          <button className="add-button" onClick={this.handleSubmit}>Add todo</button>
          <button className="completed-button" onClick={this.handleDelete}>Clear completed</button>
        </div>
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
