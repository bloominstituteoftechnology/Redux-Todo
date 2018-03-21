import React from 'react';
import { connect } from 'react-redux';

import { add_todo } from '../actions';

class TodoForm extends React.Component {
  state = {
    todoItem: ''
  };
  handleChange = event => {
    this.setState({ todoItem: event.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.add_todo(this.state.todoItem);
    this.setState({ todoItem: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.todoItem}
            placeholder="Add Items"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps, { add_todo })(TodoForm);
