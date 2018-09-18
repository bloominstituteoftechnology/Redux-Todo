import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
class TodosForm extends Component {
  state = { inputText: '' };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({ inputText: '' });
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="submit" />
        <input
          type="text"
          name="inputText"
          required
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

// const mapDispatchToProps = {
//   addTodo
// };

export default connect({ addTodo })(TodosForm);
