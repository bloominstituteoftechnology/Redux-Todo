import React from "react";

//connecting react to redux
import { connect } from "react-redux";

//Importing actions
import { newTodo } from "../actions";

class Form extends React.Component {
  state = {
    newValue: "",
    currentCompleted: false
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  //Creating the hendler for when submitting the form
  submitHandler = e => {
    e.preventDefault();
    this.props.newTodo(this.state.newValue);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          name="newValue"
          type="text"
          placeholder="Add Todo"
          value={this.state.newValue}
          onChange={this.changeHandler}
        />

        <br />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default connect(
  null,
  { newTodo }
)(Form);
