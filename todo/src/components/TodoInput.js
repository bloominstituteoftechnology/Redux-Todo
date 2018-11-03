import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/Action';

class TodoInput extends React.Component {
  state = { value: '', completed: false };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  addTodoItem = () => {
    console.log(this.state.value);
    this.props.addTodo(this.state);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button onClick={this.addTodoItem}>Add Todo</button>
      </div>
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
