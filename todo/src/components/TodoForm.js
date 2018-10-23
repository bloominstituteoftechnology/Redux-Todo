import React, { Component } from 'react';
// React redux imports
import { connect } from 'react-redux';
// Action imports
import { addTodo, deleteCompleted } from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    // State of input
    this.state = {
      newTodo: ''
    };
  }
  // Handles the input state changes
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Click handler to add todos
  handleClick = e => {
    e.preventDefault();
    if (this.state.newTodo) {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    } else {
      alert('Missing Information');
    }
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="newTodo"
          onChange={this.changeHandler}
          value={this.state.newTodo}
          placeholder="Add Todo..."
          className="addTodoInput"
          autoComplete="off"
        />
        <button onClick={this.handleClick} className="formButton">
          Add
        </button>
        <button
          className="formButton red"
          onClick={() => this.props.deleteCompleted()}>
          Delete Checked
        </button>
      </form>
    );
  }
}

// Puts state in props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// Connects to redux store and brings in action creators
export default connect(
  mapStateToProps,
  { addTodo, deleteCompleted }
)(TodoForm);
