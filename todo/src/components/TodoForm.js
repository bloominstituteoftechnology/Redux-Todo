import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup
} from "reactstrap";

import { newTodo, deleteCompleted, clearAll } from "../actions";

export class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      modal: false
    };
  }

  inputHandler = e => {
    this.setState({
      name: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.newTodo(this.state.name);
    this.setState({ name: "" });
    this.toggle();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button color="success" onClick={this.toggle}>
            Add Todo
          </Button>
          <Button color="success" onClick={() => this.props.deleteCompleted()}>
            Delete Completed
          </Button>
          <Button color="success" onClick={() => this.props.clearAll()}>
            Clear All
          </Button>
        </ButtonGroup>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Todo</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submitHandler}>
              <FormGroup>
                <Label for="text">Todo Item</Label>
                <Input
                  type="text"
                  name="todo"
                  value={this.state.name}
                  placeholder="Todo"
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { todos: state };
};

export default connect(
  mapStateToProps,
  { newTodo, deleteCompleted, clearAll }
)(TodoForm);
