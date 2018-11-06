import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, completeTodo } from "../actions";

class AddTodo extends Component {
  state = {
    currentItem: ""
  };

  handleChange = event => {
    this.setState({ currentItem: event.target.value });
    console.log(this.state.currentItem);
  };

  submit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.currentItem);
    this.setState({ currentItem: "" });
  };

  toggleComplete = event => {
    event.preventDefault();
    this.props.completeTodo(event.target.id);
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="New Todo Item"
            value={this.state.currentItem}
          />
          <button onClick={this.submit}>Add to list</button>
        </form>
        <ul>
          {console.log(this.props.todo, "check")}
          {this.props.todo.map(item => {
            return (
              <li
                onClick={this.toggleComplete}
                key={item.id}
                id={item.id}
                style={
                  item.completed ? { textDecoration: "line-through" } : null
                }
              >
                {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps, { addTodo, completeTodo })(AddTodo);