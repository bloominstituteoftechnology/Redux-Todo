import React from "react";
import { connect } from "react-redux";
import { inputHandler } from "../actions/index";

const TodoForm = props => {
  // handleSubmit = event => {
  //   event.preventDefault();
  //   //this.props.createTodo(this.state.inputText); // call method in App createNewTodo and pass it inputText
  //   //this.setState({ inputText: "" }); // reset input window to blank string
  // };

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.inputText}
          placeholder="...todo"
          onChange={props.inputHandler}
        />
        <button type="submit">Add Todo</button>
        <button
          type="button"
          // onClick={this.props.clearCompleted}
          //onClick={console.log(this.props)}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputText: state.inputText
  };
};

export default connect(
  mapStateToProps,
  { inputHandler }
)(TodoForm);
