import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

class Form extends Component {
  state = {
    formInput: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      task: this.state.formInput,
      completed: false
    };
    this.props.addTask(task);
    this.setState({ formInput: '' });
  };

  render() {
    const { formInput } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={formInput}
          onChange={this.handleInputChange}
          name="formInput"
        />
        <button>
          <i className="fas fa-plus" />
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Form);
