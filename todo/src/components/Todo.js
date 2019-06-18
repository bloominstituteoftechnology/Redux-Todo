import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";

class AddTODO extends Component {
  state = {
    text: ""
  };
  addToDo = () => {
    this.props.add(this.state.text);
    this.setState({
      text: ""
    });
  };
  mapTODOS = () => {
    console.log(this.props.todos);
    return this.props.todos.map(todo => {
      return <div>{todo.value}</div>;
    });
  };
  valueHandler = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        {this.mapTODOS()}
        <input
          text="text"
          value={this.state.text}
          placeholder="add todo"
          onChange={this.valueHandler}
        />
        <button onClick={this.addToDo}>Add todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { add, remove }
)(AddTODO);
