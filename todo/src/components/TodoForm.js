import React from "react";
import { Form, Button, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../actions/action";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoEntry: ""
    };
  }

  changeHandler = e => {
    this.setState({ todoEntry: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.todoEntry) {
      this.setState({ todoEntry: "" });
      this.props.addTodo(this.state.todoEntry);
    }
  };

  render() {
    return (
      <div>
        <Form>
          <Label>What's Left To Do, Friend</Label>
          <Input
            type="text"
            name="todo"
            value={this.state.todoEntry}
            onChange={this.changeHandler}
          />
          <Button type="submit" color="success" onClick={this.submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
