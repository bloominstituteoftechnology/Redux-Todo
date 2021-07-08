import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteTodo, completeTodo } from "../actions/index";

class TodoComponent extends Component {
  render() {
    console.log(this.props.todo);
    return (
      <ListGroupItem
        style={{
          textDecoration: this.props.complete ? "line-through" : "none"
        }}
        className={this.props.complete ? "text-muted" : null}
        onClick={() => this.props.completeTodo(this.props.id)}
      >
        <Button
          className="mr-3"
          onClick={() => this.props.deleteTodo(this.props.id)}
        >
          X
        </Button>

        {this.props.todo}
      </ListGroupItem>
    );
  }
}

export default connect(null, { deleteTodo, completeTodo })(TodoComponent);
