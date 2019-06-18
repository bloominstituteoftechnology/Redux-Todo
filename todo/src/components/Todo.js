import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove, prepare } from "../actions";
import "./todo.css";
class AddTODO extends Component {
  state = {
    text: ""
  };
  addToDo = () => {
    let date = Date.now();
    this.props.add(this.state.text, date);
    this.setState({
      text: ""
    });
  };
  mapTODOS = () => {
    console.log(this.props.todos);
    return this.props.todos.map(todo => {
      return (
        <p
          id={todo.id}
          onClick={() => this.props.prepare(todo.id)}
          className={todo.remove.toString()}
        >
          {todo.value}
        </p>
      );
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
        <button onClick={() => this.props.remove()}>Add todo</button>
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
  { add, remove, prepare }
)(AddTODO);
