import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  handleOnChange = event => {
    this.setState({ newTodo: event.target.value });
  };
  render() {
    console.log("Form Props", this.props);
    return (
      <Form className="my-3" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="todo">Todo</Label>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add a new To Do"
            onChange={this.handleOnChange}
            value={this.state.newTodo}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(FormComponent);
