import React, { Component, Fragment } from "react";
import { ADD_TO_TODOS_LIST } from "../../actions";

export default class TodoListForm extends Component {
  constructor(props) {
    super(props);
    console.log("TodoListForm", this.props.submitHandler);
    this.state = {
      newTodo: ""
    };
  }

  inputChangeHandler = event => {
    console.log("Input Change Handler", event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  // addToTodosList = event => {
  //   event.preventDefault();
  //   console.log("addToTodosList Working");
  //   return {
  //     type: ADD_TO_TODOS_LIST,
  //     payload: this.state.newTodo
  //   };
  // };

  render() {
    // console.log("NewTodo", this.submitHandler);
    return (
      <Fragment>
        <form onSubmit={this.props.submitHandler}>
          <input
            placeholder="add todo to list..."
            onChange={this.inputChangeHandler}
            value={this.state.newTodo}
          />
          <button>Enter</button>
        </form>
      </Fragment>
    );
  }
}
