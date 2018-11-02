import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    this.props.addTodoAction(this.state.input)
  }

  render() {
    return (
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.inputHandler}
            placeholder="Add a Todo"
          />
          <button type="submit">Add Todo</button>
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { addTodoAction })(AddTodo);