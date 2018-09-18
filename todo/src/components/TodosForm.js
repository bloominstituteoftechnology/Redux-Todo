import React, { Component } from 'react';
export default class TodosForm extends Component {
  state = { inputText: '' };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="submit" />
        <input type="text" onChange={props.handleInput} />
      </form>
    );
  }
}
