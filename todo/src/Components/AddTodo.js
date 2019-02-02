import React from "react";
import { connect } from "react-redux";
import { addItem } from "../Actions";

class AddTodo extends React.Component {
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
    this.props.addItem(this.state.addon);
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
        <button type="submit">Add</button>
      </form>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  { addItem }
)(AddTodo);
