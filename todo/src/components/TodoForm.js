import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class TodoForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add todo item..."
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
