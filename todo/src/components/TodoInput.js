import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/Action';

class TodoInput extends React.Component {
  state = { value: '', completed: false, id: null };

  handleInput = e => {
    const newId = Date.now();
    this.setState({ value: e.target.value, id: newId });
  };

  addTodoItem = e => {
    e.preventDefault();
    // console.log(this.state.value);
    // this.setState({ id: newId });
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({ value: '', id: null });
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
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoInput);
