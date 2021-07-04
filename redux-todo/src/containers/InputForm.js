import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class InputForm extends Component {
  state = {
    input: ''
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  };

  onInputChange = event => this.setState({ input: event.target.value });

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          onChange={this.onInputChange}
          type="text"
          value={this.state.input}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(InputForm);
