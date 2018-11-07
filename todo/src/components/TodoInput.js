import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteItems } from '../actions/Action';

class TodoInput extends React.Component {
  state = { value: '', completed: false, id: null };

  handleInput = e => {
    const newId = Date.now();
    this.setState({ value: e.target.value, id: newId });
  };

  addTodoItem = e => {
    e.preventDefault();
    // console.log(this.state.value);
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({ value: '', id: null });
  };

  deleteCompleted = e => {
    e.preventDefault();
    this.props.deleteItems(this.state);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button onClick={this.addTodoItem}>Add Todo</button>
        <button onClick={this.deleteCompleted}>Delete Completed</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addTodo, deleteItems }
)(TodoInput);
