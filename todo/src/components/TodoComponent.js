import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/index";

class TodoComponent extends Component {
  render() {
    console.log(this.props.todo);
    return (
      <ListGroupItem>
        {this.props.todo}{" "}
        <button onClick={() => this.props.deleteTodo(this.props.id)}>X</button>
      </ListGroupItem>
    );
  }
}

export default connect(null, { deleteTodo })(TodoComponent);
