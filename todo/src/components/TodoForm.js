import React, { Component } from 'react';
// React redux imports
import { connect } from 'react-redux';
// Action imports
import { addTodo } from '../actions';

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
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="newTodo"
          onChange={this.changeHandler}
          value={this.state.newTodo}
        />
        <button onClick={this.handleClick}>Add</button>
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
  { addTodo }
)(TodoForm);
