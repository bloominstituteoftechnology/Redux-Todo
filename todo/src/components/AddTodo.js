import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.data);
    this.setState({
      data: ""
    });
  }

  render() {
      return (
        <form>
        <input
          onChange={this.inputHandler}
          name="data"
          value={this.state.data}
        />
        <button type="button" onClick={this.addHandler}>
          add todo
        </button>
      </form>
      )
  }
}

const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(
    mapStateToProps,
    {addTodo}
)(AddTodo);
