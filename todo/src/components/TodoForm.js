import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: ""
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault(); //don;t want browser to assume any behavior
    this.props.addTodo({
      value: this.state.todoValue,
      completed: false //making object here
    });
    this.setState({
      todoValue: "" //resetting state
    });
  }

  updateNewTodo(event) {
    this.setState({
      todoValue: event.target.value
    });
  }

  render() {
    return (
      <div className="TodoForm">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateNewTodo}
            placeholder="new todo"
            value={this.state.todoValue} //not impacting storage
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);
