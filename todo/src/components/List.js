import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, strikeItem } from "../actions"; //second

class List extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  inputHandler = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            value={this.state.inputValue}
            placeholder="Add an item"
            onChange={this.inputHandler}
          >
            {this.value}
          </input>
          <button> Submit </button>
          <button>Delete</button>
        </form>
        {this.props.todos.map(item => {
          return (
            <div
              style={
                item.completed
                  ? { "text-decoration": "line-through" }
                  : { "text-decoration": "none" }
              }
              key={item.id}
              onClick={event => this.props.strikeItem(item.id)}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { addItem, strikeItem }
)(List); //fourth connects to store
