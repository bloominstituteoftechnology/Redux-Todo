import React from "react";

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      addon: ""
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log("added");
    this.setState({ [e.target.name]: "" });
  };

  render() {
    return (
      <form name="addon" onSubmit={this.submitHandler}>
        <input
          value={this.state.addon}
          name="addon"
          onChange={this.changeHandler}
          placeholder="Add item to list"
        />
      </form>
    );
  }
}
